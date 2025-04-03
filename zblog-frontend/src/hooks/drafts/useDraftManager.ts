"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import debounce from "lodash.debounce";

export interface DraftData {
  title: string;
  content: string;
  tags: string[];
  coverImageUrl: string;
  coverImageKey: string;
}

const DRAFT_VERSION = 2;

export function useDraftManager({
  userId,
  contentType,
}: {
  userId?: string | null;
  contentType: string;
}) {
  const pathname = usePathname();
  const effectiveUserId = userId ?? "guest";

  const DRAFT_STORAGE_KEY = `zblog_${contentType}_draft_v${DRAFT_VERSION}_${effectiveUserId}`;
  const DISCARD_FLAG_KEY = `zblog_${contentType}_discarded_v${DRAFT_VERSION}_${effectiveUserId}`;

  const [draft, setDraft] = useState<DraftData>({
    title: "",
    content: "",
    tags: [],
    coverImageUrl: "",
    coverImageKey: "",
  });
  const [hasChanges, setHasChanges] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState("No changes");

  // Refs to control prompting and re‑loading
  const hasPromptedRef = useRef(false);
  const shouldReloadDraftRef = useRef(true);

  // Utility: Check if a draft is empty.
  const isDraftEmpty = useCallback((d: DraftData) => {
    return (
      !d.title &&
      !d.content &&
      !d.coverImageUrl &&
      !d.coverImageKey &&
      (!d.tags || d.tags.length === 0)
    );
  }, []);

  // Utility: Load a draft from localStorage.
  const loadLocalDraft = useCallback((): DraftData | null => {
    const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as DraftData;
    } catch {
      localStorage.removeItem(DRAFT_STORAGE_KEY);
      return null;
    }
  }, [DRAFT_STORAGE_KEY]);

  // Utility: Clear draft from state and storage.
  const clearAllDraftData = useCallback(() => {
    localStorage.removeItem(DRAFT_STORAGE_KEY);
    localStorage.removeItem(DISCARD_FLAG_KEY);
    setDraft({
      title: "",
      content: "",
      tags: [],
      coverImageUrl: "",
      coverImageKey: "",
    });
    setHasChanges(false);
    setAutoSaveStatus("No changes");
  }, [DRAFT_STORAGE_KEY, DISCARD_FLAG_KEY]);

  // --- Draft Loading Effect ---
  useEffect(() => {
    if (!shouldReloadDraftRef.current) return;

    const discardFlag = localStorage.getItem(DISCARD_FLAG_KEY);
    if (discardFlag === "true") {
      clearAllDraftData();
      shouldReloadDraftRef.current = false;
      return;
    }

    const existingDraft = loadLocalDraft();
    if (existingDraft) {
      setDraft(existingDraft);
      if (pathname === "/express" && !hasPromptedRef.current) {
        setShowResumeModal(true);
        hasPromptedRef.current = true;
      }
    }
    shouldReloadDraftRef.current = false;
  }, [pathname, loadLocalDraft, clearAllDraftData]);

  // When leaving the create page, reset our flags so that on return the draft reloads.
  useEffect(() => {
    if (pathname !== "/express") {
      hasPromptedRef.current = false;
      shouldReloadDraftRef.current = true;
    }
  }, [pathname]);

  // --- Resume / Discard Handlers ---
  const handleResumeDraft = useCallback(() => {
    setShowResumeModal(false);
    // Mark unsaved changes so that auto-save continues.
    setHasChanges(true);
  }, []);

  const handleDiscardLocalDraft = useCallback(() => {
    localStorage.setItem(DISCARD_FLAG_KEY, "true");
    clearAllDraftData();
    setShowResumeModal(false);
  }, [clearAllDraftData]);

  // --- Auto-save ---
  // Save draft to storage regardless of whether it's "empty"
  const saveDraftToStorage = useCallback((nextDraft: DraftData) => {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(nextDraft));
    setAutoSaveStatus("Saved just now");
  }, [DRAFT_STORAGE_KEY]);

  const debouncedSave = useRef(
    debounce((nextDraft: DraftData) => {
      setAutoSaveStatus("Saving...");
      saveDraftToStorage(nextDraft);
    }, 800)
  ).current;

  useEffect(() => {
    if (!hasChanges) return;
    debouncedSave(draft);
    return () => debouncedSave.cancel();
  }, [draft, hasChanges, debouncedSave]);

  // --- Navigation Warning ---
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasChanges && !isDraftEmpty(draft)) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasChanges, draft, isDraftEmpty]);

  useEffect(() => {
    const handlePopState = () => {
      if (hasChanges && !isDraftEmpty(draft)) {
        const shouldLeave = window.confirm(
          "You have unsaved changes. Are you sure you want to leave?"
        );
        if (!shouldLeave) {
          window.history.pushState(null, "", window.location.href);
          return false;
        }
      }
      return true;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [hasChanges, draft, isDraftEmpty]);

  // --- Public Methods ---
  const setDraftField = useCallback(
    <K extends keyof DraftData>(field: K, value: DraftData[K]) => {
      setDraft((prev) => ({ ...prev, [field]: value }));
      setHasChanges(true);
    },
    []
  );

  const handleDiscardFromEditor = useCallback(() => {
    if (isDraftEmpty(draft) && !hasChanges) return;
    if (!window.confirm("Discard all changes? This cannot be undone.")) return;
    localStorage.setItem(DISCARD_FLAG_KEY, "true");
    clearAllDraftData();
  }, [draft, hasChanges, isDraftEmpty, clearAllDraftData]);

  const clearDraft = useCallback(() => {
    clearAllDraftData();
  }, [clearAllDraftData]);

  return {
    draft,
    setDraftField,
    hasChanges,
    autoSaveStatus,
    showResumeModal,
    handleResumeDraft,
    handleDiscardLocalDraft,
    handleDiscardFromEditor,
    clearDraft,
  };
}

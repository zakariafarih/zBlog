"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

// 1. Dynamically import the TinyMCE React wrapper (to avoid SSR).
const TinyMCEEditor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

interface EditorComponentProps {
  content: string;
  onContentChange: (val: string) => void;
}

/**
 * A production-ready, dark-mode TinyMCE with:
 * - Autoresize (no internal scroll)
 * - Codesample plugin for code blocks
 * - Forced paragraphs so you can type after code
 * - No iframes or extra containers
 */
export default function EditorComponent({
  content,
  onContentChange,
}: EditorComponentProps) {
  const [tinyLoaded, setTinyLoaded] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // 2. Dynamically load TinyMCE on the client (core + plugins).
  useEffect(() => {
    async function loadTinyMCE() {
      if (typeof window !== "undefined") {
        // Core, icons, and theme
        await import("tinymce/tinymce");
        await import("tinymce/icons/default");
        await import("tinymce/themes/silver");

        // Plugins
        await Promise.all([
          import("tinymce/plugins/advlist"),
          import("tinymce/plugins/autolink"),
          import("tinymce/plugins/lists"),
          import("tinymce/plugins/link"),
          import("tinymce/plugins/image"),
          import("tinymce/plugins/charmap"),
          import("tinymce/plugins/preview"),
          import("tinymce/plugins/anchor"),
          import("tinymce/plugins/searchreplace"),
          import("tinymce/plugins/visualblocks"),
          import("tinymce/plugins/fullscreen"),
          import("tinymce/plugins/insertdatetime"),
          import("tinymce/plugins/media"),
          import("tinymce/plugins/table"),
          import("tinymce/plugins/help"),
          import("tinymce/plugins/wordcount"),
          import("tinymce/plugins/codesample"),
          import("tinymce/plugins/autoresize"),
        ]);
      }
      setTinyLoaded(true);
    }
    loadTinyMCE();
  }, []);

  // 3. Use Highlight.js in the preview (optional).
  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.innerHTML = content;
      previewRef.current.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
  }, [content]);

  if (!tinyLoaded) {
    // Simple loading indicator instead of a blank screen
    return <div className="text-slate-300">Loading editor...</div>;
  }

  return (
    <div className="w-full">
      <TinyMCEEditor
        value={content}
        onEditorChange={onContentChange}
        init={{
          // 4. Serve TinyMCE resources from /tinymce (copy the entire folder to /public/tinymce)
          base_url: "/tinymce",

          // 5. No internal scroll – just grows with content
          plugins:
            "autoresize advlist autolink lists link image charmap preview anchor " +
            "searchreplace visualblocks fullscreen insertdatetime media table " +
            "help wordcount codesample",
          autoresize_min_height: 300,
          autoresize_overflow_padding: 10,

          menubar: false,
          statusbar: false,
          forced_root_block: "p",

          // 6. Provide a convenient toolbar – includes codesample
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | removeformat | codesample | help",

          // 7. Dark theme from self-hosted assets (with forced dark background in content)
          skin: "oxide-dark",
          skin_url: "/tinymce/skins/ui/oxide-dark",
          content_css: "/tinymce/skins/content/dark/content.min.css",
          content_style: `
            body {
              background: #0f172a;
              color: #f1f5f9;
              font-family: sans-serif;
              padding: 1rem;
            }
            a { color: #7dd3fc; }
          `,
          branding: false,

          // 8. The codesample plugin – built-in code insertion, no weird containers
          codesample_languages: [
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "PHP", value: "php" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" },
          ],

          // 9. Optional: Insert a trailing paragraph if needed
          setup: (editor: TinyMCEEditor) => {
            // On init, ensure there's a blank paragraph at the end
            editor.on("init", () => {
              const raw = editor.getContent({ format: "raw" });
              if (!raw.match(/<p><br\s*\/?><\/p>\s*$/)) {
                editor.setContent(raw + "<p><br/></p>");
              }
            });
            // If user inserts a codesample, ensure there's a paragraph after it to type
            editor.on("ExecCommand", (e) => {
              if (e.command === "mceInsertContent") {
                // Delay a tick so insertion completes
                setTimeout(() => {
                  const updated = editor.getContent({ format: "raw" });
                  if (!updated.match(/<p><br\s*\/?><\/p>\s*$/)) {
                    editor.setContent(updated + "<p><br/></p>");
                  }
                }, 50);
              }
            });
          },
        }}
      />
    </div>
  );
}

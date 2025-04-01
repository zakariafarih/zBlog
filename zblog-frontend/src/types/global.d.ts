declare global {
    interface Window {
      tinymce?: {
        activeEditor?: {
          undo: () => void;
        };
      };
    }
  }
  
  export {};

  
declare module 'tinymce' {
  export interface Editor {
    on(event: string, callback: (...args: any[]) => void): void;
    getContent(options: { format: string }): string;
    setContent(content: string): void;
    documentBaseUrl: string;
    baseUri: any;
    id: string;
    plugins: Record<string, any>;
  }
}

// Core TinyMCE modules
declare module 'tinymce/tinymce' {}
declare module 'tinymce/icons/default' {}
declare module 'tinymce/themes/silver' {}

// Plugin declarations
declare module 'tinymce/plugins/advlist' {}
declare module 'tinymce/plugins/autolink' {}
declare module 'tinymce/plugins/lists' {}
declare module 'tinymce/plugins/link' {}
declare module 'tinymce/plugins/image' {}
declare module 'tinymce/plugins/charmap' {}
declare module 'tinymce/plugins/preview' {}
declare module 'tinymce/plugins/anchor' {}
declare module 'tinymce/plugins/searchreplace' {}
declare module 'tinymce/plugins/visualblocks' {}
declare module 'tinymce/plugins/fullscreen' {}
declare module 'tinymce/plugins/insertdatetime' {}
declare module 'tinymce/plugins/media' {}
declare module 'tinymce/plugins/table' {}
declare module 'tinymce/plugins/help' {}
declare module 'tinymce/plugins/wordcount' {}
declare module 'tinymce/plugins/codesample' {}
declare module 'tinymce/plugins/autoresize' {}

// TinyMCE React wrapper
declare module '@tinymce/tinymce-react' {
  import { Editor } from 'tinymce';
  import React from 'react';

  interface IAllProps {
    value?: string;
    onEditorChange?: (value: string, editor: Editor) => void;
    init?: {
      setup?: (editor: Editor) => void;
      [key: string]: any;
    };
  }

  export class Editor extends React.Component<IAllProps> {}
}
declare module 'tinymce/tinymce' {
  interface EditorEvent {
    command?: string;
    type: string;
  }

  interface Editor {
    on(event: 'init', callback: () => void): void;
    on(event: 'ExecCommand', callback: (e: EditorEvent) => void): void;
    getContent(options: { format: string }): string;
    setContent(content: string): void;
  }
}

declare module 'tinymce/*' {
  const content: any;
  export = content;
}

declare module '@tinymce/tinymce-react' {
  import { Editor as TinyMCEEditor } from 'tinymce/tinymce';
  
  interface IAllProps {
    value?: string;
    onEditorChange?: (value: string, editor: TinyMCEEditor) => void;
    init?: {
      setup?: (editor: TinyMCEEditor) => void;
      [key: string]: any;
    };
  }
  
  export class Editor extends React.Component<IAllProps> {}
}
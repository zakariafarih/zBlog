declare module 'tinymce/tinymce' {
    interface Editor {
      on(event: string, callback: Function): void;
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
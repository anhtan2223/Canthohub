import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo, Heading, List, Underline } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

export default function EditorComponent(
    { onChange }:
        { onChange?: (content: string) => void; }
) {
    return (
        <div className='w-full'>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    toolbar: {
                        items: [
                            'undo', 'redo',
                            'bold', 'italic', 'underline',
                            'bulletedList', 'numberedList',
                        ]
                    },
                    plugins: [
                        Essentials, Bold, Italic, Underline, Undo, Paragraph, Heading, List
                    ],
                }}
                onChange={(_, editor) => {
                    onChange?.(editor.getData())
                }}

            />
        </div>
    );
}
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo, Heading, List, Underline } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { useState } from 'react'

export default function EditorComponent(
    { onChange }:
        { onChange?: (content: string) => void; }
) {
    const [content, setContent] = useState('');
    return (
        <div className='w-full h-30'>
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
                    setContent(editor.getData())
                    onChange?.(editor.getData())
                }}

            />
        </div>
    );
}
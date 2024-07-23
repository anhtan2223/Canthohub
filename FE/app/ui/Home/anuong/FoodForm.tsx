'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo, Heading, List, Underline } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { Button } from 'antd';

const FoodForm = () => {
    if (typeof window === 'undefined') {
        console.log('CKEditor')
    }
    return (
        <form action="">
            <div className="grid grid-cols-2">
                <div className="col-span-1">

                </div>
                <div className="col-span-1">

                </div>
            </div>
            <CKEditor
                editor={ ClassicEditor }
                config={ {
                    toolbar: {
                        items: [
                            
                            'undo', 'redo',
                            'bold', 'italic', 'underline', '|',
                            'bulletedList', 'numberedList', '|'
                        ]
                    },
                    plugins: [
                        Essentials, Bold, Italic, Underline, Undo, Paragraph, Heading,
                        List
                    ],
                    initialData: '<p>Hello from CKEditor 5 in React!</p>'
                } }
            />
            <div className=''>

            </div>
            <Button type='primary submit'>
                Hello
            </Button>
        </form>
    );
}

export default FoodForm;

'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️ this is TipTap Editor</p>',
  })

  return (
    <EditorContent editor={editor} />
  )
}

export default RichTextEditor
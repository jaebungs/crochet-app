'use client'
import './richTextEditor.scss'

import { Editor, EditorProvider, useCurrentEditor, useEditor, EditorContent } from '@tiptap/react'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import MenuBar from './MenuBar'

// const extensions = [
//   TextStyle.configure({ types: [ListItem.name] }),
//   StarterKit.configure({
//     bulletList: {
//       keepMarks: true,
//       keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//     },
//     orderedList: {
//       keepMarks: true,
//       keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//     },
//   }),
// ]

type RichTextEditorProps = {
  content?: string
  editable?: boolean
}

const extensions = [
  StarterKit,
  Underline,
  ListItem,
  TextStyle,
  Color,
  FontFamily,
  Highlight,
  Link,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  })
]

const testContent = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`

const RichTextEditor = ({
  content = testContent,
  editable = true } : RichTextEditorProps) => {

  const editor = useEditor({
    extensions: extensions,
    content: `${content}`,
    editable
  })

  const handlePostSubmit = async () => {
    const test = {
      key: 'value1',
      test: 'haha'
    }
    try { 
      const crochetPostUrl = process.env.NEXT_PUBLIC_CROCHET_POST_URL ?? '';
      const response = await fetch(crochetPostUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(test)
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(`POST Crochet project failed - ${error}`)
    }
  }
  const handleTestSubmit = async () => {

    try { 
      const crochetPostUrl = process.env.NEXT_PUBLIC_CROCHET_GET_URL ?? '';
      const response = await fetch(crochetPostUrl)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(`GET Crochet project failed - ${error}`)
    }
  }                                                                   
  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={handlePostSubmit}>
        Post
      </button>
      <button onClick={handleTestSubmit}>
        TEST
      </button>
    </>
  )
}

export default RichTextEditor
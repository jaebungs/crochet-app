import { Editor } from '@tiptap/react'
import {
    RiBold,
    RiItalic,
    RiStrikethrough,
    RiCodeSSlashLine,
    RiFormatClear, 
    RiEmotionLine,
    RiH1,
    RiH2,
    RiH3,
    RiH4,
    RiH5,
    RiH6,
    RiParagraph,
    RiListOrdered,
    RiListUnordered,
    RiCodeBoxLine,
    RiLink,
    RiLinkUnlink,
    RiDoubleQuotesL,
    RiSeparator,
    RiTextWrap,
    RiArrowGoBackLine,
    RiArrowGoForwardLine,
} from 'react-icons/ri'

type ManuBarProps = {
    editor: Editor | null
}
  
const MenuBar = ({ editor }: ManuBarProps) => {
    if (!editor) {
        return null
    }

return (
    <div className="editor-control-wrapper ">
    <button
        title="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
        !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={`${editor.isActive('bold') ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiBold />
    </button>
    <button
        title="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
        !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={`${editor.isActive('italic') ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiItalic />
    </button>
    <button
        title="Strikethrough"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
        !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={`${editor.isActive('strike') ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiStrikethrough />
    </button>
    <button 
        title="Clear format"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="menu-button mx-1">
        <RiFormatClear />
    </button>
    <button
        title="Paragraph"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${editor.isActive('paragraph') ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiParagraph />
    </button>
    <button
        title="H1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiH1 />
    </button>
    <button
        title="H2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiH2 />
    </button>
    <button
        title="H3"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiH3 />
    </button>
    <button
        title="H4"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`${editor.isActive('heading', { level: 4 }) ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiH4 />
    </button>
    <button
        title="H5"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`${editor.isActive('heading', { level: 5 }) ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiH5 />
    </button>
    <button
        title="H6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`${editor.isActive('heading', { level: 6 }) ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiH6 />
    </button>
    <button
        title="Block quote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${editor.isActive('blockquote') ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiDoubleQuotesL />
    </button>
    <button
        title="Bullet List"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${editor.isActive('bulletList') ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiListUnordered />
    </button>
    <button
        title="Ordered List"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${editor.isActive('orderedList') ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiListOrdered />
    </button>
    <button
        title="Code block"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${editor.isActive('codeBlock') ? 'is-active' : ''} menu-button mx-1`}
    >
        <RiCodeBoxLine />
    </button>
    <button 
        title="Horizontal Separator"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="menu-button mx-1">
        <RiSeparator />
    </button>
    <button 
        title="Line break"
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="menu-button mx-1">
        <RiTextWrap />
    </button>
    <button
        title="Undo"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
        !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        className="menu-button mx-1"
    >
        <RiArrowGoBackLine />
    </button>
    <button
        title="Redo"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
        !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        className="menu-button mx-1"
    >
        <RiArrowGoForwardLine />
    </button>
    </div>
)
}

export default MenuBar

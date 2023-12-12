import RichTextEditor from '@/components/richTextEditor/RichTextEditor'

export default function NonEditablePage() {
    return (
        <RichTextEditor editable={false} />
    )
}

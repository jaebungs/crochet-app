import React from 'react'
import { Editor } from '@tiptap/react'
import { RiPencilLine, RiPencilFill } from 'react-icons/ri'
import colors from '../../styles/colors';

export interface colorMenuItem {
    name: string
    color: string
}

type ColorSelectorProp = {
    editor: Editor | null
    className: string
}
  

// TODO - move to global colors to make it varaible
const textColors = [
    {
        name: "Black",
        color: '#121212'
    },
    {
        name: "Grey",
        color: '#E3E3E3'
    },
    {
        name: "White",
        color: '#FAFAFA'
    }
]

const ColorSelector = ({ editor, className }: ColorSelectorProp) => {
    if (!editor) {
        return null
    }

    return (
        <div className="flex flex-row">
            <button
                title="Text color"
                onClick={() => console.log('toggle text color dropdown')}
            >
                <RiPencilLine />
            </button>
            {textColors.map(({ name, color }, index) => (
                <button
                    key={index}
                    title={`${name} text`}
                    onClick={() => {
                        editor.commands.unsetColor();
                        name !== "Black" &&
                        editor
                        .chain()
                        .focus()
                        .setColor(color || "")
                        .run();
                        // setIsOpen(false);
                    }}
                    className={className}
                >
                    <RiPencilFill style={{ color }}/>
                    {name}
                </button>)
            )}
        </div>
    )
}

export default ColorSelector
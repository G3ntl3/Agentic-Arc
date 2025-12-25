import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";

const TipTapEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Highlight,
      Placeholder.configure({
        placeholder: "Write your notes here…",
      }),
    ],
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="border border-green-500 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex gap-2 p-2 bg-[#022] border-b border-green-600">
        <button onClick={() => editor.chain().focus().toggleBold().run()}
          className={btn(editor.isActive("bold"))}>B</button>

        <button onClick={() => editor.chain().focus().toggleItalic().run()}
          className={btn(editor.isActive("italic"))}>I</button>

        <button onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={btn(editor.isActive("underline"))}>U</button>

        <button onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={btn(editor.isActive("highlight"))}>HL</button>

        <button onClick={() => editor.chain().focus().setColor("#22c55e").run()}
          className="px-2 py-1 text-sm text-green-400 border border-green-400 rounded">
          Green
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="min-h-[300px] p-4 text-white focus:outline-none"
      />
    </div>
  );
};

const btn = (active) =>
  `px-2 py-1 rounded text-sm ${
    active ? "bg-green-500 text-black" : "bg-[#033] text-white"
  }`;

export default TipTapEditor;

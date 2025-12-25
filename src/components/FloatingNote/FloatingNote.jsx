import { useState } from "react";
import TipTapEditor from "./TipTapEditor";

const FloatingNote = () => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-black px-4 py-2 rounded-full shadow-lg"
      >
        Notes
      </button>

      {/* Note panel */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[90vw] max-w-sm bg-[#021b15] border border-green-500 rounded-xl shadow-xl">
          <div className="p-3 border-b border-green-500 text-green-400 font-semibold">
            My Notes
          </div>

          <TipTapEditor content={note} onChange={setNote} className='red'/>

          <div className="p-2 flex justify-end gap-2">
            <button
              className="text-sm text-gray-400"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <button className="text-sm bg-green-500 text-black px-3 py-1 rounded">
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNote;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NotepadWidget = () => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState("");

  // Load notes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("appNotes");
    if (saved) setNotes(saved);
  }, []);

  // Save notes automatically
  useEffect(() => {
    localStorage.setItem("appNotes", notes);
  }, [notes]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-black font-bold text-2xl shadow-xl hover:bg-green-400 transition-all"
      >
        ✎
      </button>

      {/* Notepad Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 w-100 bg-[#002A24] bg-opacity-90 backdrop-blur-md border border-green-400/20 p-4 rounded-xl shadow-2xl z-50"
          >
            <h3 className="text-green-300 font-semibold mb-2">
              Quick Notes
            </h3>

            <textarea
              className="w-full h-40 bg-black/20 border border-green-400/20 rounded-lg p-2 text-white outline-none"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write something..."
            />

            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full bg-green-500 text-black py-1 rounded-lg hover:bg-green-400 transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NotepadWidget;
    

import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface Note {
  id: number;
  text: string;
}

const NotesWidget = () => {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, text: 'Review project proposals' },
    { id: 2, text: 'Schedule team meeting' },
    { id: 3, text: 'Update documentation' },
  ]);
  const [newNote, setNewNote] = useState('');
  const [showConfirm, setShowConfirm] = useState<number | null>(null);

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote.trim() }]);
      setNewNote('');
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
    setShowConfirm(null);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-lg">Notes</h2>
        <button
          onClick={() => setNewNote('New Note')}
          className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg text-sm transition-all"
        >
          New Notes
        </button>
      </div>
      
      <div className="flex-1 space-y-2 mb-4 overflow-y-auto">
        {notes.map(note => (
          <div key={note.id} className="relative">
            {showConfirm === note.id ? (
              <div className="bg-red-500/90 p-3 rounded-lg text-white text-sm">
                <p className="mb-2">Delete this note?</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="bg-white/20 px-3 py-1 rounded text-xs hover:bg-white/30"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowConfirm(null)}
                    className="bg-white/20 px-3 py-1 rounded text-xs hover:bg-white/30"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white/20 p-3 rounded-lg flex justify-between items-center group">
                <span className="text-white text-sm flex-1 break-words pr-2">{note.text}</span>
                <button
                  onClick={() => setShowConfirm(note.id)}
                  className="text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-all flex-shrink-0"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {newNote && (
        <div className="bg-white/20 p-3 rounded-lg">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addNote()}
            className="w-full bg-transparent text-white placeholder-white/70 outline-none text-sm"
            placeholder="Enter your note..."
            autoFocus
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={addNote}
              className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-xs transition-all"
            >
              Save
            </button>
            <button
              onClick={() => setNewNote('')}
              className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-xs transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesWidget;


import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface Note {
  id: number;
  text: string;
}

const NotesWidget = ({ style }: { style?: React.CSSProperties }) => {
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
    <div 
      className="h-full flex flex-col"
      style={style}
    >
      <div className="flex justify-between items-center mb-3 pr-16">
        <h2 className="text-white font-bold text-lg">Notes</h2>
        <button
          onClick={() => setNewNote('New Note')}
          className="bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded-lg text-xs transition-all"
        >
          New Notes
        </button>
      </div>
      
      <div className="space-y-2 mb-3 flex-1 overflow-y-auto">
        {notes.map(note => (
          <div key={note.id} className="relative">
            {showConfirm === note.id ? (
              <div className="bg-red-500/90 p-2 rounded-lg text-white text-xs">
                <p className="mb-2">Delete this note?</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="bg-white/20 px-2 py-1 rounded text-xs hover:bg-white/30"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowConfirm(null)}
                    className="bg-white/20 px-2 py-1 rounded text-xs hover:bg-white/30"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white/20 p-2 rounded-lg flex justify-between items-center group">
                <span className="text-white text-xs flex-1 pr-2">{note.text}</span>
                <button
                  onClick={() => setShowConfirm(note.id)}
                  className="text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {newNote && (
        <div className="bg-white/20 p-2 rounded-lg">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addNote()}
            className="w-full bg-transparent text-white placeholder-white/70 outline-none text-xs"
            placeholder="Enter your note..."
            autoFocus
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={addNote}
              className="bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded text-xs transition-all"
            >
              Save
            </button>
            <button
              onClick={() => setNewNote('')}
              className="bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded text-xs transition-all"
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

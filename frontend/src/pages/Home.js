import React, { useEffect, useState } from 'react';
import { fetchNotes } from '../api/notes';

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes().then(setNotes);
  }, []);

  return (
    <div>
      <h1>My Notes</h1>
      <ul>
        {notes.map((note, idx) => (
          <li key={idx}>{note.message}</li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'Belajar React',
    },
  ]);
  const [inputNote, setInputNote] = useState('');

  function handleOnChange(e) {
    setInputNote(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (inputNote.trim() !== '') {
      const newNote = {
        id: new Date().getTime(),
        text: inputNote,
      };
      setNotes([...notes, newNote]);
      setInputNote('');
    }
  }
  function handleDeleteNote(id) {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  }

  return (
    <>
      <div className="app">
        <h1>Notes</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add your notes here..."
            value={inputNote}
            onChange={handleOnChange}
          />
          <button>Add</button>
        </form>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <span>{note.text}</span>
              <button onClick={() => handleDeleteNote(note.id)}>Done</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

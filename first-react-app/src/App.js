import './App.css';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: 'first' },
    { id: 2, text: 'second' },
    { id: 3, text: 'third' }
  ]);
  
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      const newNote = {
        id: notes.length + 1,
        text: inputValue
      };
      setNotes([...notes, newNote]);
      setInputValue(''); 
    }
  };

  const removeNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">Notes</h1>
        <div className="flex mb-4">
          <input 
            type="text" 
            placeholder="Enter name" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button 
            onClick={handleSubmit} 
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
        <div className="notes space-y-2">
          {notes.map(note => (
            <div key={note.id} className="flex items-center justify-between p-2 bg-gray-200 rounded-md">
              <span>{note.text}</span>
              <button 
                onClick={() => removeNote(note.id)} 
                className="text-red-500 hover:text-red-600"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

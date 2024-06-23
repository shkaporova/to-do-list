import { useState, useEffect } from "react";
import "./App.css";
import ListOfNotes from "./components/ListOfNotes/ListOfNotes";
import Form from "./components/UI/form/Form";

function App() {
  const [currentNote, setCurrentNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  function createNote(newNote) {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  function removeNote(deletedNote) {
    const updatedNotes = notes.filter((n) => n.id !== deletedNote.id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  function changeNote(changedNote) {
    const updatedNotes = notes.map((note) => {
      return changedNote.id === note.id ? changedNote : note;
    });
    setNotes(updatedNotes);
    setCurrentNote("");
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  function changeDoneNote(changedNote) {
    const updatedNotes = notes.map((note) => {
      return changedNote.id === note.id ? changedNote : note;
    });
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="App__data">
        <Form
          create={createNote}
          change={changeNote}
          currentNote={currentNote}
        />
        <ListOfNotes
          notes={notes}
          remove={removeNote}
          change={setCurrentNote}
          done={changeDoneNote}
        />
      </div>
    </div>
  );
}

export default App;

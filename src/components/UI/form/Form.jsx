import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import Button from "../button/Button";

function Form({ create, change, currentNote }) {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    if (currentNote) {
      setNote({
        title: currentNote.title,
        text: currentNote.text,
        date: Date.now(),
      });
    }
  }, [currentNote]);

  function addNewNote(e) {
    e.preventDefault();
    const newNote = {
      title: note.title,
      date: Date.now(),
      text: note.text,
      id: currentNote ? currentNote.id : Date.now(),
      done: false,
    };
    currentNote ? change(newNote) : create(newNote);

    setNote({ title: "", text: "" });
  }

  const isDisabled = note.title.trim() === "" || note.text.trim() === "";

  return (
    <form className={styles.form}>
      <h2>
        {currentNote ? "Измените старую заметку" : "Добавьте новую заметку"}
      </h2>
      <label>Заголовок:</label>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <label>Текст:</label>
      <input
        className={styles.input}
        type="text"
        name="text"
        value={note.text}
        onChange={(e) => setNote({ ...note, text: e.target.value })}
      />
      <Button onClick={addNewNote} disabled={isDisabled}>
        {currentNote ? "Сохранить" : "Добавить"}
      </Button>
    </form>
  );
}

export default Form;

import React from "react";
import { format } from "date-fns";
import styles from "./Note.module.css";
import Button from "../UI/button/Button";

function Note({ note, remove, change, done }) {
  const formatedDate = format(new Date(note.date), "dd.MM.yyyy");

  function toggleCompleted() {
    const updatedNote = { ...note, done: !note.done };
    done(updatedNote);
  }

  return (
    <div className={styles.note}>
      <div
        className={`${styles.note__checkbox} ${
          note.done ? styles.checked : ""
        }`}
        onClick={toggleCompleted}
      ></div>
      <div className={styles.note__data}>
        <div className={styles.note__title}>
          <h3 className={note.done ? styles.done : ""}>{note.title}</h3>
          <p>{formatedDate}</p>
        </div>
        <p className={note.done ? styles.done : ""}>{note.text}</p>
        <div className={styles.note__bth}>
          <Button onClick={() => change(note)}>Изменить</Button>
          <Button onClick={() => remove(note)}>Удалить</Button>
        </div>
      </div>
    </div>
  );
}

export default Note;

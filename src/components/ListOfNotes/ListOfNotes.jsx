import React from "react";
import Note from "../note/Note";
import styles from "../ListOfNotes/ListOfNotes.module.css";

function ListOfNotes({ notes, remove, change, done }) {
  return (
    <div className={styles.notes__list}>
      <h2>{notes.length ? "Список задач" : "Задач пока нет"}</h2>
      {notes.map((note) => {
        return (
          <Note
            note={note}
            key={note.id}
            remove={remove}
            change={change}
            done={done}
          />
        );
      })}
    </div>
  );
}

export default ListOfNotes;

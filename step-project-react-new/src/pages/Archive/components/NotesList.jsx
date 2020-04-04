import React, { useState, useEffect } from "react";
import { getNotes } from "../../../API";
import { SingleNoteListItem } from "../../Homepage/components/SingleNoteListItem";

export const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getNotes();
      const isArchive = data.filter((item) => item.isArchive == "true");
      setNotes(isArchive);
    })();
  }, []);
  return (
    <div>
      {notes.map(({ id, title, text, color, isArchive }) => (
        <SingleNoteListItem
          key={id}
          title={title}
          text={text}
          color={color}
          id={id}
          isArchive={isArchive}
        />
      ))}
    </div>
  );
};

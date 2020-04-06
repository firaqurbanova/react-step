import React, { useState, useEffect } from "react";
import { getNotes } from "../../../API";
import { SingleNoteListItem } from "./SingleNoteListItem";
import styled from "styled-components"

export const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getNotes();
      const isArchive = data.filter((item) => item.isArchive == "false");
      setNotes(isArchive);
    })();
  }, []);
  return (
    <List>
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
    </List>
  );
};

 const List=styled.div`
    margin-left: -15px;
  `;

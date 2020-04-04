import React, { useState, useEffect } from "react";
import { getNotes } from "../../API";
import styled from "styled-components";
import { SingleNoteListItem } from "../Homepage"; //F

export const SingleNote = ({
  history: { push },
  match: {
    params: { id },
  },
}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getNotes();
      setNotes(data);
    })();
  }, []);

  const note = notes.find((item) => item.id == +id);
  console.log(note);

  return (
    <div>
      {note && (
        <Container >
          <Note color={note.color}>
            <Header>{note.title}</Header>
            <Body>{note.text}</Body>
          </Note>
          <Buttons>
            <Button>Edit</Button>

            <Button>Delete</Button>

            <Button>Archive</Button>
          </Buttons>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
`;

const Note = styled.div`
  background-color: ${(p) => p.color};
  width: 70%;
  height: 300px;
  border: 2px solid white;
  padding: 20px;
  border-radius: 10px;
`;

const Header = styled.header`
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 24px;
  border-bottom: 1px solid white;
`;
const Body = styled.div`
  padding: 10px;
  color: white;
  font-size: 20px;
  text-align: center;
`;

const Buttons = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  width: 100%;
  height: 40px;
  margin: 15px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;

  &:focus {
    outline: none !important;
  }
`;

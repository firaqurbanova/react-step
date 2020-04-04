import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SingleNoteListItem = ( { id, title, text, color, isArchive}) => {
  return (
    <NoteContainer to={`/note/${id}`} color={color} id={id} key={id}>
      <NoteHeader>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </NoteHeader>
    </NoteContainer>
  );
};

const NoteContainer = styled(Link)`
  width: calc((100%-60px) / 3);
  margin: 0 10px 20px;
  background-color: ${(p) => p.color};
  padding: 10px;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
`;
const NoteHeader = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid white;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Text = styled.p`
  text-align: center;
`;

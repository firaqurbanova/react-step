import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SingleNoteListItem = ( { id, title, text, color, isArchive}) => {
  return (
    
    <NoteContainer to={`/note/${id}`} color={color} key={id}>
      <NoteHeader>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </NoteHeader>
    </NoteContainer>
    
  );
};

const NoteContainer = styled(Link)`
  width: calc((100%-60px) / 4);
  margin: 0 10px 20px;
  background-color: ${(p) => p.color};
  padding: 20px;
  border-radius: 10px;
  color: white;
  display: inline-block;
  text-decoration: none;
 
`;
const NoteHeader = styled.div`
  text-align: center;
  
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  
`;
const Text = styled.p`
  font-size:15px;
`;


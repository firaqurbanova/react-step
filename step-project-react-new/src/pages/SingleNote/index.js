import React, { useState, useEffect } from "react";
import { getNotes, deleteNotes, updateNote } from "../../API";
import styled from "styled-components";
import Modal from "react-modal";
import "../../styles/modalStyle.sass";
export const SingleNote = ({
  history: { push },
  match: {
    params: { id },
  },
}) => {
  //About Delete Confirm Modal
  Modal.setAppElement("body");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [EditmodalIsOpen, setEditIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
    },
  };
  const [notes, setNotes] = useState([]);
 
  const makeArchive = async (id, note) => {
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, isArchive: "true" }),
    });
    getNotes();
    window.location.reload();
  };

  const makeActual = async (id, note) => {
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, isArchive: "false" }),
    });
    getNotes();
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      const data = await getNotes();
      setNotes(data);
    })();
  }, []);
//   const [note,setNote]=useState(notes.find((item) => item.id == +id));
  
 const note = notes.find((item) => item.id == +id);
 
 
  const deleteNote = () => {
    deleteNotes({ id });
    push("/");
  };
  const editNote= async(id,note)=>{
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...note}),
      });
      getNotes();
      window.location.reload();
  }
  const onSubmit = e => {
    e.preventDefault();
    editNote(id, fields);
  };
  const [fields, setFields] = useState({
    title: "",
    text: "",
    color: "#d32727"
  });
  function openEditModal() {
    setFields({
        title:note.title,
        text:note.text,
        color: note.color
    })
    setEditIsOpen(true);
  }
  function closeEditModal() {
    setEditIsOpen(false);
  }
  const onFieldChange = e => {
    const { name, value } = e.target;
    setFields(fields => ({
      ...fields,
      [name]: value
    }));
  };
  return (
    <div>
      {note && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CloseBtn onClick={closeModal}>x</CloseBtn>
          <ModalBody>
            <h4>Are you sure want to delete "{note.title}" ? </h4>
            <ModalButtons>
              <ConfirmBtn onClick={deleteNote}>Yes</ConfirmBtn>
              <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
            </ModalButtons>
          </ModalBody>
        </Modal>
      )}

      {fields && (

        <Modal
          isOpen={EditmodalIsOpen}
          onRequestClose={closeEditModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CloseBtn onClick={closeEditModal}>x</CloseBtn>
          <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={fields.title}
         onChange={onFieldChange}
        />
        <input
          type="text"
          name="text"
          value={fields.text}
          onChange={onFieldChange}
        />
         <ColorRadios>
        <h4>Color: </h4>
        <RadioLabel color="#d32727">
          <input
            type="radio"
            name="color"
            value="#d32727"
            checked={fields.color === "#d32727"}
            onChange={onFieldChange}
          />
          <span></span>
        </RadioLabel>
        <RadioLabel color="#3a2c84">
          <input
            type="radio"
            name="color"
            value="#3a2c84"
            checked={fields.color === "#3a2c84"}
            onChange={onFieldChange}
          />
          <span></span>
        </RadioLabel>
        <RadioLabel color="#ef8e0b">
          <input
            type="radio"
            name="color"
            value="#ef8e0b"
            checked={fields.color === "#ef8e0b"}
            onChange={onFieldChange}
          />
          <span></span>
        </RadioLabel>
        <RadioLabel color="#516f55">
          <input
            type="radio"
            name="color"
            value="#516f55"
            checked={fields.color === "#516f55"}
            onChange={onFieldChange}
          />
          <span></span>
        </RadioLabel>
      </ColorRadios>
        <button>Send</button>
      </form>
        </Modal>
      )}
      {note && (
        <Container>
          <Note color={note.color}>
            <Header>{note.title}</Header>
            <Body>{note.text}</Body>
          </Note>
          <Buttons>
            <Button  onClick={openEditModal}>Edit</Button>
            <Button onClick={openModal}>Delete</Button>
            {note.isArchive == "true" ? (
              <Button onClick={() => makeActual(id, note)}>Actual</Button>
            ) : (
              <Button onClick={() => makeArchive(id, note)}>Archive</Button>
            )}
          </Buttons>
        </Container>
      )}
    </div>
  );
};

//styled Components
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
  padding: 0px 10px 10px;
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

// modal styles
const CloseBtn = styled.button`
  background-color: red;
  color: white;
  font-weight: 600;
  border-radius: 100%;
  font-size: 15px;
  height: 20px;
  width: 20px;
  border: none;
  position: absolute;
  right: 20px;
  cursor: pointer;

  &:focus {
    outline: none !important;
  }
`;
const ModalBody = styled.div`
  padding: 20px;
`;
const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;
`;
const ConfirmBtn = styled.button`
  height: 35px;
  background-color: #f26d6d;
  color: white;
  width: calc((100% / 2) - 20px);
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  border: 1px solid white;
  &:focus {
    outline: none;
  }
`;
const CancelBtn = styled.button`
  height: 35px;
  background-color: #bad496;
  width: calc((100% / 2) - 20px);
  border-radius: 5px;
  color: white;
  margin: 10px;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  border: 1px solid white;
  &:focus {
    outline: none;
  }
`;
const ColorRadios = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 15px;
  h4 {
    margin: 0 25px 0 0;
  }
`;
const RadioLabel = styled.label`
  input {
    display: none;
  }
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin: 0 10px;
    background-color: ${p => p.color};
    border: 4px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  input:checked + span {
    border-color: white;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from 'react-router-dom';


export const NoteForm = () => {
    const createNote = async ({title, text,color,isArchive}) => { {
        
          const res = await fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...fields, title, text,color,isArchive})
          });
          const answer = await res.json();
          
          
          }
      };
  const [fields, setFields] = useState({
    title: "",
    text: "",
    isArchive: "false",
    color: "#d32727"
  });

   const onSuccessSubmit =(fields)=>{
       createNote(fields);
       window.location.href = "http://localhost:3001";
     
  }

  const onChange = e => {
    const { name, value } = e.target;
    setFields(field => ({
      ...field,
      [name]: value
    }));
  };

  const onSubmit = e => {
      console.log(fields);
    e.preventDefault();
    let validation = true;
    for (let key in fields) {
      if (fields[key] === "") {
        validation = false;
        alert(`Please, fill ${key} field`);
      }
    }
    if (validation) {
      onSuccessSubmit({
        // id: Date.now(),        
        ...fields
      });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="title"
        value={fields.title}
        onChange={onChange}
      />
      {/* <input style={{display:"none"}}
        type="text"
        name="isArchived"
        value={fields.isArchive} 
      /> */}
      <Textarea
        type="text"
        name="text"
        value={fields.text}
        onChange={onChange}
      />

      <ColorContainer>
        <h4>Color: </h4>
        <RadioLabel color="#d32727">
          <input
            type="radio"
            name="color"
            value="#d32727"
            checked={fields.color === "#d32727"}
            onChange={onChange}
          />
          <span></span>
        </RadioLabel>
        <RadioLabel color="#3a2c84">
          <input
            type="radio"
            name="color"
            value="#3a2c84"
            checked={fields.color === "#3a2c84"}
            onChange={onChange}
          />
          <span></span>
        </RadioLabel>
        <RadioLabel color="#ef8e0b">
          <input
            type="radio"
            name="color"
            value="#ef8e0b"
            checked={fields.color === "#ef8e0b"}
            onChange={onChange}
          />
          <span></span>
        </RadioLabel>
        <RadioLabel color="#516f55">
          <input
            type="radio"
            name="color"
            value="#516f55"
            checked={fields.color === "#516f55"}
            onChange={onChange}
          />
          <span></span>
        </RadioLabel>
      </ColorContainer>
      <Submit>Create</Submit>
    </Form>
  );
};

const Form = styled.form`
  max-width: 500px;
  margin: 30px auto;
  padding: 30px 20px;
  background-color: #e4e9ef;
  border-radius: 15px;
`;

const inputStyles = `
  display: block;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  background-color: white;
  width: 100%;
  padding: 10px 10px;
  border-radius: 5px;

  &:focus {
    border-color: #d32727;
    outline: none;
  }`;
const Input = styled.input`
  ${inputStyles}
`;
const Textarea = styled.textarea`
  ${inputStyles};
  height: 100px;
  margin-top: 10px;
  resize: none;
`;
const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
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
const Submit = styled.button`
  ${inputStyles};
  text-transform: uppercase;
  font-weight: bold;
  background-color: #d32727;
  color: white;
`;

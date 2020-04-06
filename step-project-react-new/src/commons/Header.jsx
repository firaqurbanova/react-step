import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
// import img from './img/purple-and-blue-color-wallpaper-png-clip-art.png';
export const Header=()=>{
    return(
        <Container>
          <Apptext>NotesApp</Apptext>
            <div>
              <StyledNavLink exact to="/">Actual</StyledNavLink>
              <StyledNavLink to="/archive">Archive</StyledNavLink>
              <StyledNavLink to="/create">Create</StyledNavLink>
            </div>
        </Container>
    )
};


const Container=styled.header`
    background-color:#8FC1E2;  
    min-width:1200px;
    padding:20px 50px;
    display: flex;
    justify-content:space-between;
    align-items:center;
`



const Apptext=styled.div`
    font-weight:italic;
    font-size:40px;

`



const StyledNavLink =styled(NavLink)`
  display: inline-block;
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 15px;
  min-width: 100px;
  text-align: center;
  border-radius: 25%;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  font-weight: bold;
  border-color: white;


  &.active {
    border-color: #5284A5;
    color: #5284A5;
    
  }
`
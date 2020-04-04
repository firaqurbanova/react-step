import React from 'react'
import {NotesList} from './components/NotesList';
import {Container} from '../../commons'
export const Homepage=()=>{
    return (
        <Container>
            <h1>Notes</h1>
            <NotesList />
           
        </Container>
    )
};
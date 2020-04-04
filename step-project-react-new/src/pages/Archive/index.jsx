import React from 'react'
import {NotesList} from './components/NotesList';
import {Container} from '../../commons'
export const Archive=()=>{
    return (
        <Container>
            <h1>Archive</h1>
            <NotesList />
        </Container>
    )
};
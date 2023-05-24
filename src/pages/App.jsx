import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Note from '../components/Note'
import NoteCreator from '../components/NoteCreator'
import NotesContext from '../context/NotesContext'

export default function App() {

    const [notes, setNotes] = useState([
        { content: 'Note 1', id: 1 },
        { content: 'Note 2', id: 2 },
        { content: 'Note 3', id: 3 },
        { content: 'Note 4', id: 4 },
    ])

    useEffect(() => {

    }, [])



    return (
        <div >
            <NotesContext.Provider value={{ notes, setNotes }}>
                <Container className='mt-3'>
                    <h1>Notes</h1>
                    <hr />
                </Container>

                <Container>

                    <div id='scroll-row'>

                        {
                            notes.map(note => (
                                <div id='note-container' key={note.id}>
                                    <div className='d-flex align-items-center' >
                                        <Note content={note.content} />
                                        <NoteCreator note={note.id} />
                                    </div>

                                </div>

                            ))


                        }

                    </div>

                </Container>

                <Container className='mt-5'>
                    <h2>What is Notes?</h2>
                    <p>Notes is a hobby Project to learn more about React.js</p>
                </Container>

            </NotesContext.Provider>
        </div>
    )
}

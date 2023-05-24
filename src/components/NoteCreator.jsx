import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/NotesContext'

export default function NoteCreator(note) {

    const { notes, setNotes } = useContext(NotesContext)

    function onNoteCreated() {


        let noteIndex = note.note - 1

        let newNotes = [...notes]

        newNotes.splice(noteIndex + 1, 0, { content: noteIndex + 1, id: noteIndex + 1 })

        for (let i = noteIndex + 1; i < newNotes.length; i++) {
            newNotes[i].id = newNotes[i].id + 1

            if (typeof newNotes[i].content === 'number') {
                newNotes[i].content = newNotes[i].content + 1
            }

        }

        setNotes(newNotes)

    }

    return (
        <div className='note-creator' onClick={() => onNoteCreated()}>

        </div>
    )
}

import React from 'react'
import './Note.css'


export default function Note({ content }) {
    return (
        <div className='note'>

            <div className='note-content'>

                <p contentEditable="true">{content}</p>

            </div>


        </div>
    )
}

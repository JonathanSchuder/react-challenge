import React, { useEffect } from 'react'
import './Note.css'
import { motion, useAnimation } from 'framer-motion'


export default function Note({ content, id }) {

    const controls = useAnimation()

    useEffect(() => { startAnimation(); })


    const startAnimation = async () => {
        await controls.start({
            opacity: 1,
            x: 0,
            rotate: 360,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 40
            },
        });
    };


    return (

        <div className='note' onClick={() => startAnimation()}>

            <div className='note-content'>

                <p contentEditable="true" className='m-0'>{content}</p>

            </div>


        </div>
    )
}

import React from 'react'

function Breaklength(props) {
    return (
        <>
            <h2>Break Length</h2>
            <div className = 'leggo'>
                <div onClick = {props.breakDown} id = 'break-decrement'>
                    <img src="https://img.icons8.com/flat_round/64/000000/expand-arrow.png"/>
                </div>
                <span id = 'break-length'>
                    {props.breaklength}:00
                </span>
                <div onClick = {props.breakUp} id = 'break-increment'>
                    <img src="https://img.icons8.com/officel/16/000000/circled-chevron-up.png"/>
                </div>
            </div>
        </>
    )
}

export default Breaklength

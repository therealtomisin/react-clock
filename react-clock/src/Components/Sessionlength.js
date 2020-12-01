import React from 'react'

function Sessionlength(props) {
    return (
        <>
           <h2>Session Length</h2>
           <div className = 'leggo'>
                <div onClick = {props.sessionDown} id = 'session-decrement'>
                    <img src="https://img.icons8.com/flat_round/64/000000/expand-arrow.png"/>
                </div> 
                <span id = 'session-length'>
                    {props.sessionlength}:00
                </span>
                <div onClick = {props.sessionUp} id = 'session-increment'>
                    <img src="https://img.icons8.com/officel/16/000000/circled-chevron-up.png"/>
                </div>
           </div>
        </>
    )
}

export default Sessionlength

import React from 'react'

function Timerbody(props) {
    return (
        <>
            <h2 id = 'timer-label'>
                Session
            </h2> 
            <div id = 'time-left'>
                {props.timer}:{props.seconds}
            </div> 
            <div className = 'startStopReset'>
                <div className = 'btn' onClick = {props.play} id = 'play'>
                    play
                </div>
                <div className = 'btn' id = 'pause' onClick = {props.stop}>
                    pause
                </div>
                <div className = 'btn' id = 'reset' onClick = {props.reset}>
                    reset
                </div>
            </div>
        </>
    )
}

export default Timerbody

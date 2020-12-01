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
                <div onClick = {props.play} id = 'start_stop'>
                    play
                </div>
                <div id = 'reset'>
                    reset
                </div>
            </div>
        </>
    )
}

export default Timerbody

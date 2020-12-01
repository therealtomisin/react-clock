import React, {useState} from 'react'
import './App.css';
import Breaklength from './Components/Breaklength'
import Sessionlength from'./Components/Sessionlength'
import Timerbody from './Components/Timerbody'

function App() {

  const [breakLength, setbreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [seconds, setSeconds] = useState(60)

  const reduceBreakLength = () => {
    if (breakLength <= 1) return
    setbreakLength((breakLength) => breakLength - 1)
  }
  const increaseBreakLength = () => {
    if (breakLength >= 25 || breakLength < 0) return
    setbreakLength((breakLength) => breakLength + 1)
  }
  const increaseSessionLength = () => {
    if (sessionLength >= 25 || sessionLength < 0) return
    setSessionLength((sessionLength) => sessionLength + 1)
  }
  const reduceSessionLength = () => {
    if (sessionLength <= 5) return
    setSessionLength((sessionLength) => sessionLength - 1)
  }
  const run = () => {
    setInterval (countdown, 1000)
  }
  const xyz = (newVal) => {
    setSeconds(newVal)
    console.log(newVal)
  }
  const countdown = () => {
    console.log(seconds)
    xyz((seconds) => seconds - 1)
    
  }
  // const reduceitem = (item) => {
  //   return item = item - 1
  // }

  return (
    <div className="App">
      <header><h1>25 + 5 clock</h1></header>
      <div className = 'display'>
        <div id = 'break-label'>
          <Breaklength breakDown = {reduceBreakLength} breakUp = {increaseBreakLength} breaklength = {breakLength}/>
        </div>
      < div id = 'session-label'>
          <Sessionlength sessionDown = {reduceSessionLength} sessionUp = {increaseSessionLength} sessionlength = {sessionLength}/>
        </div>
      </div>
      <div className = 'timer-sha'>
        <div className = 'timer-body'>
          <Timerbody play = {run} seconds = {parseFloat(seconds)} timer = {sessionLength}/>
        </div>
      </div>
    </div>
  );
}

export default App;

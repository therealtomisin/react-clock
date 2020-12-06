import React, {useState} from 'react'
import './App.css';
import Breaklength from './Components/Breaklength'
import Sessionlength from'./Components/Sessionlength'
import Timerbody from './Components/Timerbody'

function App() {

  const [breakLength, setbreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [seconds, setSeconds] = useState(60)
  const [minutes, setMinutes] = useState(25)
  const [disp, setDisp] = useState("00")
  const [interv, setInterv] = useState ()
  let kane = 0;
  let min=0;

  const reduceBreakLength = () => {
    if (breakLength <= 1) return
    setbreakLength((breakLength) => breakLength - 1)
  }
  const increaseBreakLength = () => {
    if (breakLength >= 25 || breakLength < 0) return
    setbreakLength((breakLength) => breakLength + 1)
  }
  const increaseSessionLength = () => {
    if (sessionLength >= 60 || sessionLength < 0) return
    setSessionLength((sessionLength) => sessionLength + 1)
    setMinutes((minutes)=> minutes + 1)
  }
  const reduceSessionLength = () => {
    if (sessionLength <= 5) return
    setSessionLength((sessionLength) => sessionLength - 1)
    setMinutes((minutes)=> minutes - 1)
  }
  
  const run = () => {
    startTimer()
  }
  const startTimer = () => {
    setInterv(setInterval(countdown, 1000))
  }
  const stopTimer = () => {
    clearInterval(interv)
  }
  const countdown = () => {
    if (kane === 0){
      setSeconds(60)
      setMinutes(minutes => {
        min = minutes - 1
        return min
      })
    }
    setSeconds((seconds) => {
      kane = seconds - 1
        if (kane > 9){
          return kane
        }else{
          return (`0${kane}`)
        }
      })
      if(min === breakLength && kane === 0){
        console.log(breakLength)
        console.log(min)
        console.log(kane)
        stopTimer()
        }
      setDisp(kane)
      if (kane === 60){
        setDisp('00')
      }
      if (kane < 10){
        setDisp(`0${kane}`)
      }
    }
  const reset = () => {
    setMinutes(25)
    setSessionLength(25)
    setbreakLength(5)
    setDisp('00')
    setSeconds(60)
    clearInterval(interv)
  }
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
          <Timerbody play = {run} reset = {reset} stop = {stopTimer} seconds = {disp} timer = {minutes}/>
        </div>
      </div>
    </div>
  );
}

export default App;

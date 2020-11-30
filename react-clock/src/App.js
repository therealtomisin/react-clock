import './App.css';
import Breaklength from './Components/Breaklength'
import Sessionlength from'./Components/Sessionlength'

function App() {
  return (
    <div className="App">
      <header>25 + 5 clock</header>
      <div id = 'break-label'>
        <Breaklength />
      </div>
      <div id = 'session-label'>
        <Sessionlength />
      </div>
      
    </div>
  );
}

export default App;

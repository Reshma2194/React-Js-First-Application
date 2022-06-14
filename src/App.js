import logo from './logo.svg';
import './App.css';
import User from './User';
import Help from './Help';

function App() {
  let classname="App";
  function add(a,b){
    return a+b;
  }
  let name ="reshma";
  return (
    <div className={classname}>
     <h1>Welcome {name} to React JS</h1>
     <h2>Addition of 10 & 20 is {add(10,20)}</h2>
    <User/>
    <Help/>
    </div>
  );
}

export default App;

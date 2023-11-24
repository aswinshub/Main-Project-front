
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './ui-component/Main';
import Home from './elements/Home';
import Signup from './ui-component/Signup';


function App() {
  return (
    <div className="App">

<Routes>

<Route path="/" element={<Main child={<Home/>}/>}/>
<Route path="/signup" element={<Signup/>}/>



</Routes>
    </div>
  );
}

export default App;

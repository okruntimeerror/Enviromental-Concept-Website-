import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'; 
import Shop from './components/Shop';
import Topbar from './components/Topbar';
import Personal from './components/Personal';
import Example from"./components/Example"; 

function App() {
  return (
    <> 
    <Routes>
      <Route path="/" element = {<Topbar/>} />
      <Route index element = {<Homepage/>} /> 
      <Route path="shop" element = {<Shop/>} /> 
      <Route path="personal" element = {<Personal/>} /> 
      <Route path="example" element = {<Example/>} /> 
        
    </Routes>
    </> 
  )
}

export default App;

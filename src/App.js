import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
  
      <Routes>
       <Route path='/' component={<Home/>} />
       <Route path='/home' component={<Home/>} />
       <Route path='/about' component={<About/>} />
       <Route path='/contact' component={<Contact/>} />
      </Routes>

  );
}

export default App;

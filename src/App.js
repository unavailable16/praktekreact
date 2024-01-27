import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Nav from './Component/Navbar';
import Main from './Component/Main';
import Footer from './Component/Footer';
import About from "./Component/About";
import Amd from "./Component/Amd"
import Nvidia from "./Component/Nvidia"
import Intel from "./Component/Intel"
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
            <Nav/>
            <Routes>
                <Route index element ={<Main/>}/>
                <Route path="about" element ={<About/>}/>
                <Route path="footer" element ={<Footer/>}/>
                <Route path="amd" element ={<Amd/>}/>
                <Route path="nvd" element ={<Nvidia/>}/>
                <Route path="intel" element ={<Intel/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;

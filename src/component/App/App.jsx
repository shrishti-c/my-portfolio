import {React} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from "./../Home/Home";
import About from "./../About/About";
import Projects from "./../Projects/Projects";
import Skills from "./../Skills/Skills";
import Navbar from "./../Navbar/Navbar";
import "./App.css";
import Gohome from '../Gohome/Gohome';

const App =()=>{
    return(
        <div>
           
            <HashRouter>
            <div>
            <Navbar />
            <Route path="/" exact component={Home}/>
            <Route path="/about"  exact component={About}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/skills" exact component={Skills}/>
            <Gohome/>
            </div>
            </HashRouter>
        </div>
    );
};

export default App;
import React, {Component} from "react";
import { Link } from "react-router-dom";
import homeanime from './../../assets/home_anime.gif';
import "./Home.css";
import Footerlink from "../Footerlink/Footerlink";
import contactVector from './../../assets/contact_anime.png'
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import email from './../../assets/ema.png';
import instagram from './../../assets/in.png';
import web from './../../assets/web.png';


class Home extends Component 
{
    render() {
    return(
        <>
         <div className="home-container">
             <div className="header-text">
                 <h1>Welcome to my Portfolio</h1>
                 <p>Strong foundation in several skills, Data Structure, Algorithms, C++ and
               Web Development. My abilities are
not constrained solely to learning. <br/>I keep polishing my skills and apply my knowledge to
live Projects.<br/> Parallelly I participate in multiple events to keep in pace with the new
technologies and trends.</p>
             </div>

             <div className="head-btns">
             <Link to='/about' className='btn btn-white'>
                 <p className='btn-text black-text'>Know more about me</p>
             </Link>
             </div>
             <div className="splash-image">
                 <img src={homeanime} alt="home-animation" className="home-anime"/>
             </div>
         </div>

         <div className='social-icons-container'>
                <a href='https://github.com/shrishti-c' className='social-icon' target="_blank">
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/shrishtic9/' target="_blank"
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a
                    href='https://instagram.com/choudhary_shrishti' target="_blank"
                    className='social-icon'
                >
                    <img src={email} alt='social' />
                </a>

                <a
                    href='https://instagram.com/choudhary_shrishti' target="_blank"
                    className='social-icon'
                >
                    <img src={instagram} alt='social' />
                </a>
               
                <a href='https://madhavbahl.tech' className='social-icon' target="_blank">
                    <img src={web} alt='social' />
                </a>
            </div>
            <Footerlink
                phrase='Read More '
                link='about me!'
                toadress='/about'
            />
        </>
    );
    }
}

export default Home;
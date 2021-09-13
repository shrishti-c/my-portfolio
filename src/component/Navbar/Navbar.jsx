import React from 'react';
import "./Navbar.css"; 
import {slide as Menu} from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component 
{
    render(){
        const {location}=this.props;
        console.log(location);
        const homeclass= location.pathname === '/'? 'active-item': "";
        const aboutclass= location.pathname === '/about'? 'active-item': "";
        const skillclass= location.pathname === '/skill'? 'active-item': "";
        const contactclass= location.pathname === '/contact'? 'active-item': "";
        const projectclass= location.pathname === '/project'? 'active-item': "";
  return(
     <Menu>
       <Link to='/' className={`menu-item ${homeclass}`}>
                    Home
                </Link>
                <Link to='/about' className={`menu-item ${aboutclass} `}>
                    About
                </Link>
                <Link to='/projects' className={`menu-item ${projectclass}`}>
                    Projects
                </Link>
                <Link to='/skills' className={`menu-item ${skillclass} `}>
                    Skills
                </Link>
     </Menu>
  );
    }
}

export default withRouter(Navbar);


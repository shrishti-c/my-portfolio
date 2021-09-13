import React from "react";
import './Header.css';


const Header = ({Heading, Details}) => 
{
    return(
        <div className="header-container">
            <h1>{Heading}</h1>
            <p>{Details}</p>       
        </div>
    )
}

export default Header;
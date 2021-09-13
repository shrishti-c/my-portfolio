import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './Gohome.css';
import react from "react";

class Gohome extends Component{

     navigateToHome = () =>
     {
         const {history} = this.props;
         history.push('/');
     };

    render()
    {

        const {location}= this.props;
        const whitebtn = location.pathname==="/";

        return(
            <button  className={`go-home-btn ${
                whitebtn ? 'white-bkg' : 'gradient-bkg'
            }`} onClick={this.navigateToHome}>

                <img className="home-icon" src={whitebtn? homeIconBlack : homeIconWhite} alt="Home-icon"/>
            </button>
        )
    }
}

export default withRouter(Gohome);
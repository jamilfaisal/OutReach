import React from "react";
import { Link } from "react-router-dom";
import logo from './static/logo.png'
import './styles.css'

class LeftSideHeader extends React.Component {

    render() {
        return(
            <div id="header_background">
                <Link to={"/"}>
                    <button id="back" type="button"> &#10094; Back</button>
                </Link>
                <div id="header">
                    <h1>OutReach</h1>
                    <img alt="The logo for the web-app" src={logo}/>
                </div>
                <br></br>
                <br></br>
                <div id="tagline">
                    <h5>connecting through our stories <br/><span id="second_tagline"> during COVID-19 </span></h5>
                </div>
            </div>
        )
    }

}

export default LeftSideHeader
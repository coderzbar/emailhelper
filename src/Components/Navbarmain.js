import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkRoll} from "react-scroll";
import logoimg from '../Images/logo.png';




export default function Navbarmain() {
  return (
    <>

    <nav className="navbar navbar-expand-md my-navbar">
    
        <div className="container">
            <Link to="/#" className="navbar-brand">
                <img src={logoimg} alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto for-tb-center">
                    <li className="nav-item">
                        
                     <LinkRoll to="howitworks" spy={false} className="nav-link" aria-current="page" >How it works</LinkRoll>
                    </li>
                    <li className="nav-item">
                     <LinkRoll to="pricing" spy={false}  className="nav-link" >Pricing</LinkRoll> 
                    </li>
                </ul>
                <div className="for-tb-center">
               <Link target="_blank" to="https://app.emailhelper.ai/signin"><button className="sign-in" type="submit">Sign In</button></Link>
               <Link target="_blank" to="https://app.emailhelper.ai/signup"><button className="sign-upp" type="submit">Sign Up</button></Link> 
               </div>
            </div>
        </div>
    </nav>

    </>
  )
}

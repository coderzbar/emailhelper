import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkRoll} from "react-scroll";
import logoimg from '../Images/logo.png';




export default function Navbarmain() {
  return (
    <>

    <nav class="navbar navbar-expand-md my-navbar">
    
        <div class="container">
            <Link to="/#" class="navbar-brand">
                <img src={logoimg} alt="Logo" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto for-tb-center">
                    <li class="nav-item">
                        
                     <LinkRoll to="howitworks" spy={false} class="nav-link" aria-current="page" >How it works</LinkRoll>
                    </li>
                    <li class="nav-item">
                     <LinkRoll to="pricing" spy={false}  class="nav-link" >Pricing</LinkRoll> 
                    </li>
                </ul>
                <div class="for-tb-center">
               <Link target="_blank" to="https://app.emailhelper.ai/signin"><button class="sign-in" type="submit">Sign In</button></Link>
               <Link target="_blank" to="https://app.emailhelper.ai/signup"><button class="sign-upp" type="submit">Sign Up</button></Link> 
               </div>
            </div>
        </div>
    </nav>

    </>
  )
}

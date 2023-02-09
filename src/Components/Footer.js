import React from 'react'
import {Link} from "react-router-dom";
import logoimg from '../Images/logo.png';
import Footercard from '../Images/cards.png';


export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-md-6">
                    <div className="footer-txt">
                        <img src={logoimg} alt="footer-img" />
                        <div className="sdfsdf">
                            <h6>Connect AI to your mailbox</h6>
                            <p>Let AI to complete tasks for you by simple email request - the same way you would communicate with your assistant over email.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="footer-links-main-bx">
                        <div className="footlink">
                            <h6>Menu</h6>
                            
                            <Link to="https://app.emailhelper.ai/signin">Sign In</Link>
                            <Link to="https://app.emailhelper.ai/signup">Sign up</Link>
                          
                        </div>
                        <img src={Footercard} alt="card" />
                    </div>
                </div>

                <div className="col-12">
                    <p className="copy">Copyright 2022 EmailHelper.ai <Link to="/terms">Terms</Link> | <Link to="/privacy">Privacy</Link></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

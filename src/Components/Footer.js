import React from 'react'
import {Link} from "react-router-dom";
import logoimg from '../Images/logo.png';
import Footercard from '../Images/cards.png';


export default function Footer() {
  return (
    <footer class="footer">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-12 col-md-6">
                    <div class="footer-txt">
                        <img src={logoimg} alt="footer-img" />
                        <div class="sdfsdf">
                            <h6>Connect AI to your mailbox</h6>
                            <p>Let AI to complete tasks for you by simple email request - the same way you would communicate with your assistant over email.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="footer-links-main-bx">
                        <div class="footlink">
                            <h6>Menu</h6>
                            
                            <Link to="https://app.emailhelper.ai/signin">Sign In</Link>
                            <Link to="https://app.emailhelper.ai/signup">Sign up</Link>
                          
                        </div>
                        <img src={Footercard} alt="card" />
                    </div>
                </div>

                <div class="col-12">
                    <p class="copy">Copyright 2022 EmailHelper.ai <Link to="/terms">Terms</Link> | <Link to="/privacy">Privacy</Link></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

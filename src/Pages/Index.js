import React from 'react'
import {useEffect} from "react";
import Footer from '../Components/Footer';
import Navbarmain from '../Components/Navbarmain';
import Phone1 from '../Images/phone1.png';
import Phone2 from '../Images/phone2.png';
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Index() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <>
    <Navbarmain />
    
    <section className="banner">
        <div className="container">
            <div className="row justify-content-center pb-5">
                <div className="col-12 col-xl-6" data-aos='fade-in' data-aos-duration='1000'>
                    <h1>Boost your<br />
                        business writing<br />
                        with AI</h1>
                    <p>Access full AI potential straight from your email.<br />
                        Get help with writing professional emails in any language.</p>
                    
                    <form action="">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Enter your e-mail ID" aria-label="Recipient's username" aria-describedby="button-addon2" /> 
                            <Link to="https://app.emailhelper.ai/signup"><button className="btn btn-outline-secondary" type="button" id="button-addon2">TRY NOW</button></Link> 
                            
                        </div>
                    </form>
                   

                    <p className="hero-paragraph">To use without registration just send your request<br />as a Subject of email to <strong>ai@emailhelper.ai</strong></p>
                </div>
            </div>

            <div className="row simple-bxs">
                <div className="col-12 col-sm-6 col-lg-4 d-flex">
                    <div className="feature-grid-block" data-aos='fade-up' data-aos-duration='1000'>
                        <div>
                            <h4 className="feature-big-heading">Simple to use</h4>
                            <p className="paragraph">One email away from any task AI&nbsp;can do</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 d-flex">
                    <div className="feature-grid-block" data-aos='fade-up' data-aos-duration='1000'>
                        <div>
                            <h4 className="feature-big-heading">Multiple languages</h4>
                            <p className="paragraph">Use your native language or ask "Write in Spanish"</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 d-flex">
                    <div className="feature-grid-block" data-aos='fade-up' data-aos-duration='1000'>
                        <div>
                            <h4 className="feature-big-heading">Latest technology</h4>
                            <p className="paragraph">Best AI under the hood delivers superb results</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="how-work" id="howitworks">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 text-center" data-aos='fade-up' data-aos-duration='1000' >
                    <h2>How it works</h2>
                    <p className="wrksdf">Get a few words request unfolded as neat email</p>
                </div>

                <div className="col-12 col-md-6">
                    <div className="phone-img">
                        <img src={Phone1} alt="how it works" data-aos='fade-left' data-aos-duration='1000'/>
                    </div>
                </div>
                <div className="col-12 col-md-6" data-aos='fade-up' data-aos-duration='1000'>
                    <h3>Send email with request</h3>
                    <p>To get started, put your request in the Subject of new email and send it to our email address <strong>ai@emailhelper.ai</strong></p>
                </div>
            </div>

            <div className="row how-sec-row align-items-center">
                <div className="col-12 col-md-6" data-aos='fade-up' data-aos-duration='1000'>
                    <h3>Send email with request</h3>
                    <p>To get started, put your request in the Subject of new email and send it to our email address <strong>ai@emailhelper.ai</strong></p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="phone-img">
                        <img src={Phone2} alt="how it work 2" data-aos='fade-right' data-aos-duration='1000'/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="pricing" id="pricing">
        <h2 data-aos='fade-up' data-aos-duration='1000'>Pricing</h2>
        <p data-aos='fade-up' data-aos-duration='1000'>This app is <strong>FREE.</strong></p>
    </section>

    <section className="when-it">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center" data-aos='fade-up' data-aos-duration='1000'>
                    <h2>When it helps</h2>
                    <p className="mb-5">Example situations for Email Helper to tickle</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="hlp-bxs" data-aos='fade-up' data-aos-duration='1000'>
                        <h3>"I accidentally overslept" and other excuses</h3>
                        <p>Be more professional and avoid undermining trust by unfolding your excuse in a neat business email.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="hlp-bxs" data-aos='fade-up' data-aos-duration='1000'>
                        <h3>In serious situations, you have no time to elaborate</h3>
                        <p>AI will help you to clearly and concisely convey the information when your world is falling apart.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="hlp-bxs" data-aos='fade-up' data-aos-duration='1000'>
                        <h3>Sweeten up a help request or ask for a favor</h3>
                        <p>Our AI will translate dry language into phrases that are considerate. This conveys a sense of appreciation.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="hlp-bxs" data-aos='fade-up' data-aos-duration='1000'>
                        <h3>To say NO, but extremely polite</h3>
                        <p>The AI use of polite and appreciative language helps to soften the rejection and avoid offending the recipient.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="hlp-bxs" data-aos='fade-up' data-aos-duration='1000'>
                        <h3>Last-minute schedule changes</h3>
                        <p>Show consideration and respect for the other person's time, plus avoid any misunderstandings or conflicts.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="hlp-bxs" data-aos='fade-up' data-aos-duration='1000'>
                        <h3>For polite reminders and followups</h3>
                        <p>Gentle reminds ensure that important tasks or requests are not forgotten or overlooked.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="faq">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10 col-xl-9 col-xxl-8">
                    <h2 data-aos='fade-up'>FAQ</h2>
                    <div className="custom-faq">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item" data-aos='fade-up' data-aos-duration='1000'>
                                <div className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is EmailHelper.ai all about?</button>
                                </div>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>EmailHelper.ai is an email interface to the latest capabilities of AI. Imagine it as an AI assistant you communicate with over email. EmailHelper.ai needs no special setup and may be used straight from your mailbox. You are just one email away from the tasks completed by AI.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos='fade-up' data-aos-duration='1000'>
                                <div className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How to use EmailHelper.ai in another language?</button>
                                </div>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>By default EmailHelper.ai accepts any language as a prompt and delivers result in UK English. If you want the result in Spanish, add "Write in Spanish" at the beginning of your prompt.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos='fade-up' data-aos-duration='1000'>
                                <div className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can I use EmailHelper.ai for free?</button>
                                </div>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Yes, you do. You can use our app instantly and free. Just send your request as a Subject of email to <strong>ai@emailhelper.ai</strong>
                                            ‍More functionality is available after <a href="/#">registration</a> :)</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="accordion-item" data-aos='fade-up' data-aos-duration='1000'>
                                <div className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Can I use EmailHelper.ai for free?</button>
                                </div>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Yes, you do. You can use our app instantly and free. Just send your request as a Subject of email to <strong>ai@emailhelper.ai</strong>
                                            ‍More functionality is available after <a href="/#">registration</a> :)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos='fade-up' data-aos-duration='1000'>
                                <div className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Can I use EmailHelper.ai for free?</button>
                                </div>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Yes, you do. You can use our app instantly and free. Just send your request as a Subject of email to <strong>ai@emailhelper.ai</strong>
                                            ‍More functionality is available after <a href="/#">registration</a> :)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="get-started">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6" data-aos='fade-up' data-aos-duration='1000'>
                    <h2>Get started for free</h2>
                    <p>Only enter email and do a few clicks to get your first task completed by AI</p>
                </div>
                <div className="col-12 col-md-6" data-aos='fade-up' data-aos-duration='1000'>
                    <form action="" className="white-form">
                        <div className="input-group">
                            
                            <input type="email" className="form-control" placeholder="Enter your e-mail ID" aria-label="Recipient's username" aria-describedby="button-addon2" />
                           <Link to="https://app.emailhelper.ai/signup"><button className="whit-frm-btn" type="button" id="button-addon2">TRY NOW</button></Link> 
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </>
  )
}

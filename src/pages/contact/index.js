import React, { useState } from 'react';
import axios from 'axios';
import Tooltip from "../../component/tooltip/index";
import linkedinprofile from "../../images/linkedinprofile.png";
function Contact(){
const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

function emailing(){
    document.getElementById("emailSubmit").submit();
}
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post('https://ayushbackend-two.vercel.app/send-email', formData);
            alert('Email sent successfully!');
        } catch (error) {
            alert('Error sending email');
        }
    };

    return (
        <div className="blog">
             <div className="blog-part is-menu">
                <a href="/" className="blog-menu">About
 <svg fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                </a>
                <a href="/work" className="blog-menu">
                    Work
                    <svg fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                </a>
               
                <a href="/contact" className="blog-menu">
                Contact
                   
                </a>

<a href="https://www.linkedin.com/in/ayush-jain-654617145/" className="blog-menu ">
                  <div >
      <Tooltip 
        content="_________________________________________"
        imageUrl={linkedinprofile}
      >
                               <u> Profile  <svg fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" />
                    </svg></u>
                            
      </Tooltip>
    </div>
                </a>

                <a href="mailto:ayush2202ksr@gmail.com" className="blog-menu mention">✉ ayush.me</a>
                
            </div>

            <div className="blog-header blog-is-sticky">
                <div className="blog-article header-article">
                    <div className="blog-big__title">🧑🏻‍💻</div>
                    <div className="blog-menu  small-title">🌐 💻</div>
                </div>

                <div className="blog-article page-number">
                    001↳
                </div>


            </div>

            <div className="blog-header-container">
                <div className="blog-header">
                    <div className="blog-article header-article">

                        <div className="blog-big__title">Contact us</div>

                        <div className="blog-menu small-title date">Message on +91 9625463432</div>
                    </div>

                    <div className="blog-article">
                        <img src="https://ouch-cdn2.icons8.com/SnJIana3cVsQvp2fMCM1Zp6s3k7BVcD8MoaaEFxU3Yk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQ4/LzQ0MTM5NWNmLTRl/NTktNGFlNi1iOGI2/LTBmMDg2Mzg5MzBh/Zi5wbmc.png" alt="" />
                        <h2></h2>
                        <div className="blog-detail">
                            <span>By Ayush Jain</span>
                            <span>5 Min Read</span>
                        </div>
                       If you are intrested in work please contact me. <br/>
 <form  onSubmit={handleSubmit} id="emailSubmit">
                           <input name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} className="input-collapsible"/>
                        <input name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} className="input-collapsible"/>
                        <textarea name="message" type="text" placeholder="Enter your project idea"  value={formData.message} onChange={handleChange} className="input-collapsible"/>
                        <a className="not-big-screen-text"  href="javascript:;" onclick="emailing()">
                           
                     <button className="buttonSize" type="submit" >Submit now</button>
                        </a>
                        </form>
                    </div>
                </div>

            </div>

            <div className="blog-part right-blog">
                <marquee width="100%" direction="left">
                    <span>Hire me If you think your project is unique.</span>
                    <span>3+ years of experience in Tech.</span>
                    <span>Please connect with me.</span>
                </marquee>
                <div className="blog-right-title-container">
                    <div className="blog-right-title">
                        Hire for work
                    </div>
                    <div className="blog-menu rounded">See All</div>
                </div>
                <div className="blog-right">
                    <div className="blog-right-container">
                        <div className="blog-title-date">
                            <div className="blog-right-page">1</div>
                            <div className="date">2/4/24</div>
                        </div>
                        <div className="blog-right-page-title">Hire me</div>
                        <div className="blog-right-page-subtitle">You can hire me as freelance for working on your project</div>
                        <a className="sidebar-moving-link" href="mailto:ayush@bridgemonkcorp.in">

                            Hire now
                        </a>
                    </div>

                    <div class="circle">
                        <div class="circle-title">See my github profile</div>
                        <div class="circle-subtitle">ayush12993</div>
                        <div class="circle-footer"><a className="circle-footer" href="https://github.com/ayush12993">Explore</a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
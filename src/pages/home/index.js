import '../../css/app.css';
import Tooltip from "../../component/tooltip/index";
import nodejs from "../../images/nodejs.png";
import laravel from "../../images/laravel.png";
import wordpress from "../../images/wordpress.jpeg";
import shopify from "../../images/shopify.svg";
import woocommerce from "../../images/woocommerce.jpg";
import webflow from "../../images/webflow.png";
import einsolution from "../../images/einsolution.png";
import chaturbhujhospital from "../../images/chaturbhujhospital.png";
import githubprofile from "../../images/githubprofile.png";
import ayush from "../../images/ayush.png";
import linkedinprofile from "../../images/linkedinprofile.png";
function Home(){
    return (
        <div className="blog">
            <div className="blog-part is-menu">
                <a href="/" className="blog-menu">About</a>
                <a href="/work" className="blog-menu">
                    Work
                    <svg fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                </a>
               
                <a href="/contact" className="blog-menu">
                Contact
                    <svg fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
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

                        <div className="blog-big__title">Full time dev</div>

                        <div className="blog-menu small-title date">Backend, Frontend & Database</div>
                    </div>

                    <div className="blog-article">
                        <img src="https://ouch-cdn2.icons8.com/SnJIana3cVsQvp2fMCM1Zp6s3k7BVcD8MoaaEFxU3Yk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQ4/LzQ0MTM5NWNmLTRl/NTktNGFlNi1iOGI2/LTBmMDg2Mzg5MzBh/Zi5wbmc.png" alt="" />
                            <h2>3+ years experienced developer</h2>
                            <div className="blog-detail">
                                <span>By Ayush Jain</span>
                                <span>5 Min Read</span>
                            </div>
                                            
      <Tooltip 
        content="___________________________"
        imageUrl={ayush}
      >
                 <u>  Hi, I             Ayush,</u>
                            
      </Tooltip>
     I am an experienced web developer, hands on experience in developing unique projects that is one of a kind, with experience in other tech stacks such as Wordpress, WooCommerce, Webflow, NodeJS, Laravel(only preferred for 1-2 hour base projects).<br/> I have experience in android also, I know the working of it also. <br/>I do Leetcode in Java to challange my programming skills and hone in it.<br/>
                        My current tech stack are -
                        <ul>
       
        <li>
                         <div >
      <Tooltip 
        content="This is a node js image which is related to nodejs technology."
        imageUrl={nodejs}
      >
                               <u> NodeJS</u>
                            
      </Tooltip>
    </div>
    </li>
    <li>
                         <div >
      <Tooltip 
        content="This is a laravel image which is related to laravel technology."
        imageUrl={laravel}
      >
                               <u> Laravel</u>
                            
      </Tooltip>
    </div>
    </li>


        <li>
                         <div >
      <Tooltip 
        content="This is a wordpress image which is related to wordpress technology."
        imageUrl={wordpress}
      >
                               <u> Wordpress</u>
                            
      </Tooltip>
    </div>
    </li>

    <li>
                         <div >
      <Tooltip 
        content="This is a shopify image which is related to shopify technology. We recommend & use shopify over woo commerce"
        imageUrl={shopify}
      >
                               <u> Shopify</u>
                            
      </Tooltip>
    </div>
    </li>
                     



   <li>
                         <div >
      <Tooltip 
        content="This is a woocommerce image which is related to woocomerce technology."
        imageUrl={woocommerce}
      >
                               <u> Woocommerce</u>
                            
      </Tooltip>
    </div>
    </li>
   <li>
                         <div >
      <Tooltip 
        content="This is a webflow image which is related to webflow technology."
        imageUrl={webflow}
      >
                                <u>Webflow</u>
                            
      </Tooltip>
    </div>
    </li>
                           

                        </ul>

                            <a className="not-big-screen-text" href="/contact">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-down-right" viewBox="0 0 24 24">
                                    <path d="M15 10l5 5-5 5" />
                                    <path d="M4 4v7a4 4 0 004 4h12" />
                                </svg>
                                Contact me
                            </a>
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
                       Current work
                    </div>
                    <div className="blog-menu rounded">See All</div>
                </div>
                <div className="blog-right">
                    <div className="blog-right-container">
                        <div className="blog-title-date">
                            <div className="blog-right-page">1</div>
                            <div className="date">2/4/24</div>
                        </div>
                        <div className="blog-right-page-title">Chaturbhujhospital.com</div>
                        <div className="blog-right-page-subtitle">A full hospital software for managing hospital</div>
                        <a className="sidebar-moving-link" href="https://chaturbhujhospital.com">

                                                 <div >
      <Tooltip 
        content="__________________"
        imageUrl={chaturbhujhospital}
      >
                              <u>  Click me</u>
                            
      </Tooltip>
    </div>
                        </a>
                    </div>

                    <div className="blog-right-container">
                        <div className="blog-title-date">
                            <div className="blog-right-page">2</div>
                            <div className="date">2/4/23</div>
                        </div>
                        <div className="blog-right-page-title">EINSolution.com</div>
                        <div className="blog-right-page-subtitle">A website for creating EIN through automation.</div>
                        <a className="sidebar-moving-link" href="https://einsolution.com">

                                                                   <div >
      <Tooltip 
        content="__________________"
        imageUrl={einsolution}
      >
                              <u>  Click me</u>
                            
      </Tooltip>
    </div>
                        </a>
                    </div>

                    <div className="circle">
                        <div className="circle-title">See my github profile</div>
                        <div className="circle-subtitle">ayush12993</div>
                        <div className="circle-footer"><a className="circle-footer" href="https://github.com/ayush12993">
                                       <div >
      <Tooltip 
        content="__________________"
        imageUrl={githubprofile}
      >
                              <u>  Explore</u>
                            
      </Tooltip>
    </div>
                        </a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
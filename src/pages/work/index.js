import '../../css/app.css'
function Work(){
    return (
        <div className="blog">
            <div className="blog-part is-menu">
                <a href="/" className="blog-menu">Profile
                    <svg fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                </a>
                <a href="/work" className="blog-menu">
                    Work
                </a>
                
                <a href="/contact" className="blog-menu">
                Contact
                    <svg fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
              
                </a>
                <a href="mailto:ayush2202ksr@gmail.com" className="blog-menu mention">✉ ayush.me</a>
                <a href="https://www.linkedin.com/in/ayush-jain-654617145/" className="blog-menu subscribe">Profile</a>
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

                        <div className="blog-big__title">Modern developer </div>

                        <div className="blog-menu small-title date">3+ years experience</div>
                    </div>

                    <div className="blog-article">
                        <img src="https://ouch-cdn2.icons8.com/SnJIana3cVsQvp2fMCM1Zp6s3k7BVcD8MoaaEFxU3Yk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQ4/LzQ0MTM5NWNmLTRl/NTktNGFlNi1iOGI2/LTBmMDg2Mzg5MzBh/Zi5wbmc.png" alt="" />
                        <h2></h2>
                        <div className="blog-detail">
                            <span>By Ayush Jain</span>
                            <span>5 Min Read</span>
                        </div>
                        I have done multiple projects as a freelance. One of my long ongoing project is *******. I can discuss it one-on-one but not publicly. It,s an automation project where details are filled and generate a PDF and invoice PDF after the payment.<br/>
                        My current tech projects are -
                        <ul>
                            <li>
                               ******* project - An automation project where details are filled and generate a PDF and invoice PDF after the payment.
                            </li>
                            <li>
                                Chaturbhuj hospital - Full website and management system for hospital for managing everything.
                            </li>
                            <li>
                                TheARTDepo - Home decor ecommerce website for managing everything & buying it online.
                            </li>
                            <li>
                                ThinkOfBest - It is an agency website for web & app relate dprojects.
                            </li>

                        </ul>

                        <a className="not-big-screen-text" href="">
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

export default Work
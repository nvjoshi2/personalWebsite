import React from 'react';
import '../AboutPage.css';
import JapanPic from '../../japan_pic.jpeg';
import MapPic from '../../map_pic.png';
import Resume from '../../my_resume.pdf';
import gitub_icon from '../../github_icon.png';
import linkedin_icon from '../../linkedin_icon.png';
import email_icon from '../../email_icon.png';
import resume_icon from '../../resume_icon.png';
const AboutPage = (props) => {

    return (
            <div className = "about-wrapper about-container">
                <div className= 'about-header'><h1>About me</h1></div>
                <body className= 'about-body'>
                    <div className='about-body-left'>
                        <div className='about-intro'>
                            <p>
                                I'm Nathan Joshi, a soon to be graduate of the University of Illinois
                                at Urbana-Champaign studying Industrial Engineering with a minor in Computer Science. 
                                I found programming to be far and above the most fun and fulfilling experience in my academic career
                                so I made a hobby of and pursued a minor in it. It is now my goal to make a career out of it and
                                I could not be more excited. <br/>
                                <br/>
                                Besides coding I enjoy playing table tennis, going to concerts,
                                and <a href={MapPic} target="_blank" rel="noopener noreferrer">traveling</a> (when there isn't a global pandemic going on).

                            </p>
                        </div>
                        <div className='about-work'>
                            <div className='about-work-header'><h1>Work Experience</h1></div>
                            <ul>
                                <li><p><a href='https://sambasafety.com/' target="_blank" rel="noopener noreferrer">Samba Safety</a>, Data Science Intern (May 2019 - August 2019)</p></li>
                                <li><p><a href='https://www.itascaplastics.com/' target="_blank" rel="noopener noreferrer">Itasca Plastics</a>, Engineering Intern (May 2018 - August 2018)</p></li>
                            </ul>
                            
                        </div>
                        <div className='about-connect'></div>
                            <div className='about-connect-header'><h1>Connect</h1></div>
                            <ul>
                                <li><div className='icon-box'><img className='icon' src={gitub_icon}/><a href='https://github.com/nvjoshi2' target="_blank" rel="noopener noreferrer">GitHub</a></div></li>
                                <li><div className='icon-box'><img className='icon' src={linkedin_icon}/><a href='https://www.linkedin.com/in/nathan-joshi-208435151/' target="_blank" rel="noopener noreferrer">Linkedin</a></div></li>
                                <li><div className='icon-box'><img className='icon' src={email_icon}/><a href={"mailto:nvj1300@gmail.com"}>nvj1300@gmail.com</a></div></li>
                                <li><div className='icon-box'><img className='icon' src={resume_icon}/><a href = {Resume} target = "_blank"rel="noopener noreferrer" >Resume</a></div></li>
                            </ul>
                    </div>
                    <div className='about-body-right'>
                        <div className='about-body-right-container'>
                            <img className='picture' src={JapanPic} />
                            <div className='middle'>
                                <div className='text'>Hey look its me in Japan</div>
                            </div>
                        </div>
                        
                    </div>
                </body>
            </div>
    )
}

export default AboutPage;
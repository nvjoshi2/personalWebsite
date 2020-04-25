import React from 'react';
import TimeItPic from '../../timeit_screenshot.png';
import '../PortfolioPage.css';
const PortfolioPage = (props) => {

    return (
        <div className = 'portfolio-container '>
            <div className = 'portfolio-item'>
                <img className = 'website-image' src={TimeItPic}/>
                <div className = 'overlay'>
                    <h3 className = 'title'>TimeIt</h3>
                    <div className = 'visit-button'>
                        <a href="http://timeapp-frontend.s3-website-us-east-1.amazonaws.com/" target="_blank">Visit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;
import React from 'react';
import TimeItPic from '../../timeit_screenshot.png';
import LatexPic from '../../latex_screenshot.png'
import '../PortfolioPage.css';
const PortfolioPage = (props) => {

    return (
        <div className = 'portfolio-container '>
            <div className = 'portfolio-item'>
                <img className = 'website-image' src={TimeItPic}/>
                <div className = 'overlay'>
                    <h3 className = 'title'>TimeIt</h3>
                    <div className = 'visit-button'>
                        <a href="http://timeit.me.s3-website-us-east-1.amazonaws.com/" target="_blank">Visit</a>
                    </div>
                </div>
            </div>
            <div className = 'portfolio-item'>
                <img className = 'website-image' src={LatexPic}/>
                <div className = 'overlay'>
                    <h3 className = 'title'>Text to LaTeX</h3>
                    <div className = 'visit-button'>
                        <a href="https://www.youtube.com/watch?v=dUh9TwvH2ZM" target="_blank">View Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;
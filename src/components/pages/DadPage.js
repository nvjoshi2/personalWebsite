import React from 'react';
import DadPic from '../../dad_zhu_pic.jpg';
import YoutubeBackground from 'react-youtube-background';

import Helmet from 'react-helmet'
import YouTube from 'react-youtube';
import '../DadPage.css'
function DadPage() {

    function _onReady(event) {
        // access to player in all event handlers via event.target
        // event.target.mute();
        event.target.playVideo();
    };
      
    function _onEnd(event) {
        event.target.playVideo();
    };
      
 
 
      
    const videoOptions = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        start: 25,
        loop: 1
        }
    }

    const videoSource = 'https://www.youtube.com/watch?v=CVvJp3d8xGQ';
    return (
        <div>
        <div className='wrapper'>
            <div className='mom-title'>Happy Fathers Day Dad!!!</div>
                <img className='dad-pic' src={DadPic} />
        </div>
        <div className={`body is-article-visible`}>
  
        <div className="video-background">
          <div className="video-foreground">
            <YouTube
              videoId="CVvJp3d8xGQ"
              opts={videoOptions}
              className="video-iframe"
              onReady={_onReady}
              onEnd={_onEnd}
            />
          </div>
        </div>
      </div>
      </div>
    )
}

export default DadPage;
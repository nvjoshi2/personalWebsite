import React from 'react';
import DadPic from '../../dad_zhu_pic.jpg';
import YoutubeBackground from 'react-youtube-background';

import Helmet from 'react-helmet'
import YouTube from 'react-youtube';
// import Faded from '../../faded.mp4';
import ReactPlayer from 'react-player';
import '../DadPage.css'
function DadPage() {


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

    var videoSource = 'https://www.youtube.com/watch?v=CVvJp3d8xGQ';
    videoSource = 'https://youtu.be/CVvJp3d8xGQ?t=25'
    return (
        <div>
        <div className='wrapper'>
            <div className='mom-title'>Happy Fathers Day Dad!!!</div>
                <img className='dad-pic' src={DadPic} />
        </div>
        <div className={`body is-article-visible`}>
  
        <div className="video-background">
          <div className="video-foreground">
            <ReactPlayer url= {videoSource} playing={true} loop={true} muted={true} onReady={(event) => {
                console.log(event.player.player)
                // event.player.player.player.playVideo()
                event.player.player.unmute()
            }}/>
          </div>
        </div>
      </div>
      </div>
    )
}

export default DadPage;
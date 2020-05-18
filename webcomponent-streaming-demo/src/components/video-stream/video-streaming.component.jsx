import React from 'react';
import {Component} from 'react';

import Hls from 'hls.js';





 class Player extends Component {
  
    componentDidMount(){

        const streamURL = 'http://localhost:3000/assets/sample1/sample.m3u8';
        const video = this.player;
        const hls = new Hls();

        if (Hls.isSupported() && this.player) {
            
            hls.loadSource(streamURL);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play();
            });
        }
     
    }



    render(){
        const style = {
            width: 800,
            height: 500,
            background: '#000',
        }


        return (
            <div>
                 <video controls={true}  style={style} ref={(player) => this.player = player} autoPlay={true}> </video>
                
            </div>
           
        );
    }
}


  
export default Player;
  
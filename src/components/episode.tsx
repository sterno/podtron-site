import moment from 'moment';
import React from 'react';
import { Container } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player'
import TranscriptViewer from './transcript-viewer';
import { Link } from 'gatsby';

import 'react-h5-audio-player/lib/styles.css';
import "../styles/global.css";


const Episode = ({ podcastId, title, date, description, url }:{podcastId: string, title:string, date:Date, description:string, url:string} ) => {
    const dateString=moment(date).format('MMMM DD, YYYY');
    return ( 
        <Container className="episodeContainer">
                <Link to={podcastId}><h1 className="episodeTitle">{title}</h1></Link>
                <div>
                    <p className="dateString">{dateString}</p>
                </div>
                <div style={{textAlign: 'left'}}>
                    <p>{description}</p>
                </div>
                <div>
                    <AudioPlayer src={url} volume={.5} preload='none'/>
                </div>
                <div><TranscriptViewer podcastId={podcastId}></TranscriptViewer></div>
        </Container>
    );
    };

export default Episode;
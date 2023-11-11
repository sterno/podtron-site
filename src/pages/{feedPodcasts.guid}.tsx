import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import AudioPlayer from 'react-h5-audio-player'

import { graphql } from 'gatsby';
import { Container } from "react-bootstrap"
import moment from "moment"
import ReactMarkdown from "react-markdown"


import 'react-h5-audio-player/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const episodeTitleCss = {
    fontSize: '27px'
}


const dateStringCss = {
    fontSize: '14px',
    color: '#a8a8a8',
    lineHeight: '1.9em',
}

const EpisodePage: React.FC<PageProps> = (props) => {

    const [transcript, setTranscript] = React.useState('');
    
    //@ts-ignore - complains about feedPodcasts beecause it's not typed
    const episode = props.data.feedPodcasts;

    React.useEffect(() => {   
        const fetchData = async () => {
            const response = await fetch(`${process.env.GATSBY_API_ENDPOINT}?podcastId=${episode.guid}`);
            const responseJson=await response.json();
            setTranscript(responseJson.transcript);
        }

        fetchData();
        
    }, []);


    const dateString=moment(episode.pubDate).format('MMMM DD, YYYY');
   
    return (
        <main>
           <Header/>
           <Container className="episodePageContainer" style={{width: '60%', paddingBottom: 50}}>
                <h1 style={episodeTitleCss}>{episode.title}</h1>
                <div>
                    <p style={dateStringCss}>{dateString}</p>
                </div>
                <div style={{textAlign: 'left'}}>
                    <p>{episode.itunes.summary}</p>
                </div>
                <div>
                    <AudioPlayer src={episode.enclosure.url} volume={.5} preload='none'/>
                </div>
                <Container className="transcriptContainer">
                    <h3>Transcript</h3>
                    <ReactMarkdown>
                    {transcript} 
                    </ReactMarkdown>
                </Container>
            </Container>
        </main>
        
    )
}

export default EpisodePage;

export const Head: HeadFC = () => <title>Podtron: Epsiode </title>

export const query = graphql`
  query($id: String) {
    feedPodcasts(id: { eq: $id }) {
        guid,
        link,
        title,
        pubDate,
        itunes {
          summary,
          episode
        },
        enclosure {
            url
        }
    }
  }
`
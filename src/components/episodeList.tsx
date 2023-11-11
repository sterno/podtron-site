import React from 'react';
import Episode from './episode';
import { Container, Row } from 'react-bootstrap';

const EpisodeList = ({ episodeNodes }:{episodeNodes:Array<any>}) => {
    return (
        <React.Fragment>
        { 
        episodeNodes.map((node:any) => {
            return (
                <Container className='episodeListContainer' key={node.node.itunes.episode}>
                    <Row>
                        <Episode 
                        podcastId={node.node.guid}
                        title={node.node.title}
                        date={node.node.pubDate}
                        description={node.node.content}
                        url={node.node.enclosure.url}
                />
                    </Row>

                </Container> 
                
            )
        }) 
        }
        </React.Fragment>
    )
}
        




export default EpisodeList;
//React component, using react-bootstrap, that displays a "View Transcript" button.  When the button is clicked it will
//fetch the transcript text from an API endpoint.  It will then display the transcript in a modal.  The transcript
//text is in markdown format

import React from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const TranscriptViewer = ({ podcastId }:{podcastId:string}) => {
    const [show, setShow] = useState(false);
    const [transcriptText, setTranscriptText] = useState("");

    return (
        <Container className="transcriptLinkContainer">
            <Button variant="secondary" className="transcriptButton" href={podcastId}>View Transcript</Button>
        </Container>
    );
};

export default TranscriptViewer

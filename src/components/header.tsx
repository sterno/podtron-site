//React component for the header of the site

import React from 'react';
import { Container, Dropdown, Nav, NavDropdown, NavLink, Navbar} from 'react-bootstrap';

const navLinkCss = {
    
}
const Header = () => {
    return (
        <Container className="text-center" style={{paddingTop:50}}>
            <img src={'/logo.png'} alt="Podtron Logo" width={264} />
            <p className="subtitle">Podcasting With Bots</p>
            <Navbar className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href={process.env.GATSBY_RSS_FEED_URL} className="navLink">Subscribe Via RSS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/" className="navLink">Home</Nav.Link>
                </Nav.Item>
        
            </Navbar>
        </Container>
    );
}

export default Header;
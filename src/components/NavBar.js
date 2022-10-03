
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import portfoilo from '../assets/img/PORTFOLIO.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect( () => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }
        window.addEventListener ("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
           <img src={portfoilo} className="w-155 nav-img" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home') }>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about') }>About</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects') }>Projects</Nav.Link>
            <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact') }>Contact</Nav.Link>
          </Nav>
          
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/arjita-singh-kushwaha-4516151b3/" target="_blank"> <img src={navIcon1} alt="" /> </a>
                {/* <a href="#"> <img src={navIcon2} alt="" /> </a> */}
                <a href="https://www.instagram.com/arjita_kushwah/" target="_blank"> <img src={navIcon3} alt="" /> </a>
            </div>
            
            <a className="vvd" href="#connect" onClick={ () => onUpdateActiveLink('contact') }><span>Let's Connect</span></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


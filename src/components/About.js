import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Aboutme } from "./Aboutme";

import colorSharp from "../assets/img/color-sharp.png";
export const About = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT')
        
 

      return (
        <section className="about" id="about" >
            <Container>
                <Row className="gap">
                
                    <Col lg="12" className="mb-5">
                        <h2> ABOUT</h2>
                    </Col>
                    <Col lg="4" md="3">
                      <div className="about_btns d-flex flex-column align-items-center">
                        <button className={`about-btn ${aboutFilter === 'ABOUT' ? 'about-btn-active' : '' }`} onClick={() =>setAboutFilter ('ABOUT')}>About Me</button>
                        <button className={`about-btn ${aboutFilter === 'EDUCATION' ? 'about-btn-active' : '' } ` } onClick={() =>setAboutFilter ('EDUCATION')}>Education</button>
                        <button className={`about-btn ${aboutFilter === 'SKILLS' ? 'about-btn-active' : '' } ` } onClick={() =>setAboutFilter ('SKILLS')}>Skills</button>
                        {/* <button className="about-btn" onClick={() =>setAboutFilter ('AWARD')}>award</button> */}
                      </div>
                    </Col>
                    <Col lg="8" md="9">
                     
                     {
                      aboutFilter === 'ABOUT' && <Aboutme/>
                     }

                     {
                      aboutFilter === 'EDUCATION' && <Education/>
                     }
                     {
                      aboutFilter === 'SKILLS' && <Skills/>
                     }
                    </Col>
                          
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}  alt='bg'/>
        </section>
      )
      
}
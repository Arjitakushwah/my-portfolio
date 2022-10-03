
import { Container, Col, Row } from "react-bootstrap";
import { useRef } from 'react';
import emailjs from "emailjs-com";

import contactImg from "../assets/img/contact-img.svg";
export const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bxdooib', 'template_jt993iu', form.current, '5sZrgm3PYI56LzGBh')
    e.target.reset()
    };
    
    return (
        <section className="contact" id="connect">
            <Container >
                <Row>
                    <Col md={4}  >
                        <Container>
                        <Row className="align-items-center contact-options">
                            <Col sm={12} className="px-1 contact-option">
                                
                                <h4>Email</h4>
                                <h6>arjitakushwah@gmail.com</h6>
                                <a href="mailto:arjitakushwah@gmail.com" target="_blank">Send a Message</a>
                            </Col>
                            
                            <Col sm={12} className="px-1 contact-option">
                            
                            <h4>Whatsapp </h4>
                            
                            <a href="https://api.whatsapp.com/send?phone=7000759376 " target="_blank">Send a Message</a></Col>
                        </Row>
                        </Container>
                    </Col>
                    <Col md={8}>
                        <h2> Get In touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Container>
                            <Row className="form">
                                <Col sm={6} className="px-1">
                                    <input type="text" name="first_name"  placeholder="First Name"  />
                                </Col><Col sm={6} className="px-1">
                                    <input type="text" name="last_name" placeholder="Last Name"  />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" placeholder="Email"  />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="phone" placeholder="Phone NO."  />
                                </Col>
                                <Col>
                                <textarea row="6" name="message"  placeholder="Message" />
                                <button type="submit"><span>Send</span></button>
                                </Col>
                                
                            </Row>
                            </Container>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
                            }
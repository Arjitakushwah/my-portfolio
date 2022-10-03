  
  import { Col, Container, Row } from "react-bootstrap";
  import aboutimg from "../assets/img/about-img.jpg";
  import resume from "../assets/img/arjita.pdf";
  export const Aboutme = () => {                    
    return(
        <Container>
        <Row className=" about-content-wrapper  ">        
            <Col lg={4} xs={11} className="about-img align-items-center">
                <img src={aboutimg} alt="" className="w-100"  />
            </Col>
            <Col lg={8}  xs={12} className="about-content">
                <h2> I'm Arjita Singh Kushwaha </h2>
                <p>I'm a 2nd year (CSE) student and passionate web designer. Proficient in UX/UI, HTML, CSS, and
                    Javascript. I have worked on REACT.JS and applications that have an effective impact on real-world
                    problems. I am Eager to add worth through utilizing prospecting and learning abilities in the field of
                    design and development.</p>
                <a href={resume} download className="btn"><span>Download CV</span></a>
                          
                      
            </Col>
        </Row>
        </Container>
             )
    }
import { Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    const projects1 = [
        {
            title: "Bussiness Startup",
            description: "design & development",
            imgUrl: projImg1,
        },
        {
            title: "Bussiness Startup",
            description: "design & development",
            imgUrl: projImg2,
        },
        {
            title: "Bussiness Startup",
            description: "design & development",
            imgUrl: projImg3,
        }
    ]
    const projects2=[
        {
            title: "Bussiness Startup",
            description: "design & development",
            imgUrl: projImg1,
        },
        {
            title: "Bussiness Startup",
            description: "design & development",
            imgUrl: projImg2,
        },
        {
            title: "Bussiness Startup",
            description: "design & development",
            imgUrl: projImg3,
        }     
    ]
    const projects3=[
        {
            title: "Bussiness Startup",
            description: "design & development",
            imgUrl: projImg1,
        },
        {
            title: "Bussiness Startup",
            description: "design & development",
            imgUrl: projImg2,
        },
        {
            title: "Bussiness Startup",
            description: "design & development",
            imgUrl: projImg3,
        }     
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged.</p>
                            <Tab.Container id="project-tabs" defaultActiveKey= "first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">tab one</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">tab two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                    tab three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects1.map((project, index) => {
                                                return(
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                               <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return(
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                             })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return(
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                             })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
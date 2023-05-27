"use client"
import { Card, Col, Container, Row } from 'react-bootstrap'
import IndividualIntervalsExample from '../components/sliderPagina'
import VideoPlayerp1 from '../components/videoP1'
import styles from "../page.module.css"
import Image from 'next/image'
import HeaderAndFooterExample from '../components/tarjetaancha'
import Badge from 'react-bootstrap/Badge';
import HeaderAndFooterExample2 from '../components/ancha2'




function page() {
  return (
    <>

      <div className={styles.containerp1} >
        <IndividualIntervalsExample />

        <Container >

          <Row>
            <Col style={{ display: "flex", justifyContent: "center", marginTop: "30px", textAlign: "center", alignItems: "center" }} data-aos="fade-down">
              <h2 style={{ color: "lightseagreen", fontFamily:"unset", fontSize: "3rem", fontWeight: "bold" }} >Contenido Interactivo</h2>
            </Col>
          </Row>

          <Row style={{ marginTop: "60px" }}>
            <Col style={{ display: "flex", justifyContent: "center",alignItems:"center" }}data-aos="fade-up-right" data-aos-duration="3000">
              <Card style={{ width: '25rem', background: "none" }}>
                <Card.Body >
                  <Card.Img variant="top" src="unitylogo.png" />
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ display: "flex", justifyContent: "center",alignItems:"center" }}data-aos="fade-up-left" data-aos-duration="3000">
              <Card style={{ width: '25rem', background: "none" }}>
                <Card.Body >
                  <Card.Img variant="top" src="clogo.png" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            
            <Col style={{ display: "flex", justifyContent: "center",
            flexWrap:"nowrap",margin:"30px 30px" }} data-aos="zoom-in">
              <Badge pill bg="primary">
               Vuforia
              </Badge>{' '}
              <Badge pill bg="secondary">
                Realidad Aumentada
              </Badge>{' '}
              <Badge pill bg="success">
                C#
              </Badge>{' '}
              <Badge pill bg="danger">
                Testing
              </Badge>{' '}
              <Badge pill bg="warning" text="dark">
                JavaScript
              </Badge>{' '}
              <Badge pill bg="info">
                InteligenciaArtificial
              </Badge>{' '}
              <Badge pill bg="light" text="dark">
                InterfaceUsuario
              </Badge>{' '}
              <Badge pill bg="dark">
                MachineLearning
              </Badge>
            </Col>
            
          </Row>
          <Row data-aos="fade-up"
     data-aos-duration="3000">
            <Image
              src="/gamer1.jpg"
              alt="Programacion propia"
              width={854}
              height={480}
            />
          </Row>



          <Row data-aos="flip-left" data-aos-duration="3000">
            <HeaderAndFooterExample2 />
          </Row >
          <Row data-aos="zoom-in" data-aos-duration="2000">

          <VideoPlayerp1 videoSrc="/barco1.mp4" />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default page
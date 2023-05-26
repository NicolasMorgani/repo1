"use client"
import VideoPlayerp1 from "./components/videoP1"
import styles from "./page.module.css"
import { Col, Container, Row, Card,  } from "react-bootstrap"
import Image from 'next/image';
import Example from "./components/botonp1";

export default function Home() {
  return (
    <>
        
      <div className={styles.container} >


      <Container fuid >
          <Row>
            <Col style={{display:"flex"}} >
            <Card border="primary" style={{margin:50, width: '50rem',background:"none"}}>
              <Card.Body>
            <h1>Descargate la App</h1>
              <p style={{ fontFamily: "monospace", fontSize: 60, margin: 10 }}>
                Explora el contenido Digital e interactivo de las Islas Malvinas.
              </p>
              </Card.Body>
              </Card>
            </Col>
            
           
          </Row>
          <Row>
            <Col >
              <Example />
            </Col>
          </Row>


          <Row>
            <Col>
              <VideoPlayerp1 videoSrc="/avion1.mp4" />
            </Col>

          </Row>
          <Row >
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: 'relative', width: '60%', height: '50vh' }}>
                <Image
                  src="/islasArgentinas.png"
                  alt="Imagen a pantalla completa"
                  fill

                  quality={100}
                />
              </div>

            </Col>
          </Row>
          <Container>
            <Row xs={1} md={2} className="g-5">
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card border="info"  style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="menu1.jpg" />
                  <Card.Body >
                    <Card.Title style={{fontFamily:"cursive"}}>Digital e Interactivo</Card.Title>
                    <Card.Text>
                      Descargate y experimenta con la App distintas modalidades de juego
                      con en una experiencia totalmente digital e interactiva sobre las Islas Malvinas
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card border="info"  style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="menuu.jpg" />
                  <Card.Body>
                    <Card.Title style={{color:"white"}}>Didactico e Intuitivo</Card.Title>
                    <Card.Text>
                      Descubre acontecimientos que ocurrieron desde los
                      inicios hasta los tiempos actuales y explora los dias del conflicto de 1982
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Container>
        
      

          </Container>
      </div>
     
    </>

  )

}

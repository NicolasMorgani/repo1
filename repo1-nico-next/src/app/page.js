"use client"
import VideoPlayerp1 from "./components/videoP1"
import styles from "./page.module.css"
import { Col, Container, Row, Card, } from "react-bootstrap"
import Image from 'next/image';
import Imgislascard from "./components/imgislascard";


export default function Home() {
  return (
    <>

      <div className={styles.container} >


        <Container fuid >
          <Row>
            <Col style={{ display: "flex" }}  >
              <Card border="primary" style={{ margin: 50, width: '50rem', background: "none" }}>
                <Card.Body>
                  <h1>Descargate la App</h1>
                  <p className={styles.textohero}>
                    Explora el contenido Digital e interactivo de las Islas Malvinas.
                  </p>
                </Card.Body>
              </Card>
            </Col>


          </Row>
          <Row>

          </Row>


          <Row>
            <Col>
              <VideoPlayerp1 videoSrc="/avion1.mp4" />
            </Col>

          </Row>
          <Row >
            <Col style={{ display: "flex", justifyContent: "center" }}>
            
                  <Imgislascard/>


            </Col>
          </Row>
          <Container>
            <Row xs={1} md={2} className="g-5">
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="menu1.jpg" />
                  <Card.Body >
                    <Card.Title style={{ color:"#0deff7",fontFamily: "cursive" }}>Digital e Interactivo</Card.Title>
                    <Card.Text>
                      Descargate y experimenta con la App distintas modalidades de juego
                      con una experiencia totalmente digital e interactiva sobre las Islas Malvinas
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="mapa.jpg" />
                  <Card.Body>
                    <Card.Title style={{color:"#0deff7",fontFamily: "cursive"}}>Didactico e Intuitivo</Card.Title>
                    <Card.Text>
                      Descubre acontecimientos que ocurrieron desde los
                      inicios hasta los tiempos actuales y explora los dias del conflicto de 1982
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="barco.jpg" />
                  <Card.Body>
                    <Card.Title style={{color:"#0deff7",fontFamily: "cursive"}} >Divertido y didactico</Card.Title>
                    <Card.Text>
                      Diviertete mientras exploras y experimentas a travez de la App
                      y sus diferentes funcionalidades y modos de juego
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="quiz11.jpg" />
                  <Card.Body>
                    <Card.Title style={{color:"#0deff7",fontFamily: "cursive"}}>Adaptable y para todos</Card.Title>
                    <Card.Text>
                      Contenido desarrollado para dispositvos moviles con informacion y canales utiles
                      para el Veterano de Guerra de Malvinas VGM 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Row style={{ height: "50px" }}>

          </Row>
        </Container>

      </div>

    </>

  )

}

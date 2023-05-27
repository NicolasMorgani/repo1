
"use client"

import styles from "../page.module.css"
import { Col, Container, Row, Card, } from "react-bootstrap"

import Imgislascard from "../components/imgislascard";
import IndividualIntervalsExample2 from "../components/sliderp2";
import HeaderAndFooterExample from "../components/tarjetaancha";
function page() {
  return (
    <div className={styles.containerp2}>
      <Container fuid >
          <Row>
            <Col style={{ display: "flex" }} data-aos="fade-up-right"  >
              <Card border="info" style={{ margin: 50, width: '50rem',background:"none"  }} >
                <Card.Body>
                  <h1 style={{color:"#0deff7",fontFamily: "cursive",}}>Jugabilidad</h1>
                  <p className={styles.textohero}>
                    Desarrollo Profesional adaptable a cualquier dispositivo movil.
                  </p>
                </Card.Body>
              </Card>
            </Col>


          </Row>
          <Row>

          </Row>


          
          <Row >
            <Col style={{ display: "flex", justifyContent: "center" }}data-aos="zoom-in">
            
            <Card border="info" style={{ width: '25rem',background:"none" }}>
        <Card.Body style={{margin:0,padding:0}}>
            <Card.Img  variant="top" src="h1.jpg"/>
        </Card.Body>
    </Card>


            </Col>
          </Row>
          <Row data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
            <HeaderAndFooterExample />
          </Row>
          
          <Container style={{marginTop:"40px"}}>
            <Row xs={1} md={2} className="g-5">
              <Col style={{ display: "flex", justifyContent: "center" }}data-aos="zoom-out-right">
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top"  src="quiz10.jpg" />
                  <Card.Body >
                    <Card.Title style={{ color:"#0deff7",fontFamily: "cursive" }}>Casos de Uso</Card.Title>
                    <Card.Text style={{color:"white"}}>
                      Metodologias agiles para las actualizaciones y los contenidos dinamicos escalables 
                      en varios sistemas operativos
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}data-aos="zoom-out-left">
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="quiz12.jpg" />
                  <Card.Body>
                    <Card.Title style={{color:"#0deff7",fontFamily: "cursive"}}>Testing</Card.Title>
                    <Card.Text style={{color:"white"}}>
                     Producto testiado en la plataforma pgitara varios dispositivos y distintas resoluciones siendo
                     totalmente responsivo y adaptativo
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}data-aos="zoom-out-right">
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="c4.jpg" />
                  <Card.Body>
                    <Card.Title style={{color:"#0deff7",fontFamily: "cursive"}} >Jugabilidad e interacciones</Card.Title>
                    <Card.Text style={{color:"white"}}>
                      Intuitiva y dinamica la experiencia con el usuario y el recorrido a travez de las 
                      distintas modalidades de juego y contenidos
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}data-aos="zoom-out-left">
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="menuu.jpg" />
                  <Card.Body>
                    <Card.Title style={{color:"#0deff7",fontFamily: "cursive"}}>Seguro y Confiable</Card.Title>
                    <Card.Text style={{color:"white"}}>
                      App desarrolla bajos los standares de seguridad y proteccion de Datos sin conexion a bases de Datosni ficheros externos
                      todo el contenido esta en esta App.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row style={{ height: "50px" }}>

          </Row>
            <IndividualIntervalsExample2/>
          </Container>
          <Row style={{ height: "50px" }}>

          </Row>
        </Container>
    </div>
  )
}

export default page

"use client"

import styles from "../page.module.css"
import { Col, Container, Row, Card, } from "react-bootstrap"

import Imgislascard from "../components/imgislascard";
import IndividualIntervalsExample2 from "../components/sliderp2";
function page() {
  return (
    <div className={styles.containerp2}>
      <Container fuid >
          <Row>
            <Col style={{ display: "flex" }}  >
              <Card border="info" style={{ margin: 50, width: '50rem',background:"none"  }} >
                <Card.Body>
                  <h1 style={{color:"#0deff7",fontFamily: "cursive"}}>Descargate la App</h1>
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
            <Col style={{ display: "flex", justifyContent: "center" }}>
            
            <Card border="info" style={{ width: '25rem',background:"none" }}>
        <Card.Body style={{margin:0,padding:0}}>
            <Card.Img  variant="top" src="h1.jpg"/>
        </Card.Body>
    </Card>


            </Col>
          </Row>
          <Container style={{marginTop:"40px"}}>
            <Row xs={1} md={2} className="g-5">
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top"  src="quiz10.jpg" />
                  <Card.Body >
                    <Card.Title style={{ color:"#0deff7",fontFamily: "cursive" }}>Digital e Interactivo</Card.Title>
                    <Card.Text>
                      Descargate y experimenta con la App distintas modalidades de juego
                      con en una experiencia totalmente digital e interactiva sobre las Islas Malvinas
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="quiz12.jpg" />
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
                  <Card.Img variant="top" src="c4.jpg" />
                  <Card.Body>
                    <Card.Title style={{color:"#0deff7",fontFamily: "cursive"}} >Didactico e Intuitivo</Card.Title>
                    <Card.Text>
                      Descubre acontecimientos que ocurrieron desde los
                      inicios hasta los tiempos actuales y explora los dias del conflicto de 1982
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
                  <Card.Img variant="top" src="menuu.jpg" />
                  <Card.Body>
                    <Card.Title style={{color:"#0deff7",fontFamily: "cursive"}}>Didactico e Intuitivo</Card.Title>
                    <Card.Text>
                      Descubre acontecimientos que ocurrieron desde los
                      inicios hasta los tiempos actuales y explora los dias del conflicto de 1982
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
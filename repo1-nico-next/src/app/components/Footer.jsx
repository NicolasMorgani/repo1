"use client"
import Image from "next/image"
import { Card, Col, Container, Row } from "react-bootstrap"


function Footer() {
    return (

        
            <Container fluid style={{backgroundColor:"black"}}>
                
                <Row style={{padding:"30px 40px"}}>
                    <Col >

                        <h2 style={{color:"lightyellow"}}>Operacion Rosario</h2>
                        <p style={{ color: "lightblue", fontFamily: "cursive" }}>Contenido Desarrollado por NicoMorgani /  
                         <Image
                        src="/githubb.png"
                        width={40}
                        height={40}
                        alt="imagen de github"
                        style={{borderRadius:"50%"}}
                    />   </p>

                    </Col>
                  <Col>
                  <Image
                        src="/playstore.png"
                        width={413}
                        height={122}
                        alt="playstore"
                        
                    />
                    

                  </Col>
                </Row>
                <Row style={{color:"black",height:"40px"}}>

                </Row>
                
              
            </Container>
       

    )
}

export default Footer
"use client"
import Image from "next/image"
import { Card, Col, Container, Row } from "react-bootstrap"


function Footer() {
    return (


        <Container fluid style={{ backgroundColor: "black" }}>

            <Row style={{ padding: "30px 40px" }} data-aos="fade-down"
                data-aos-duration="2000">
                <Col >

                    <h2 style={{ color: "lightyellow" }}>Operacion Rosario</h2>
                    <p style={{ color: "lightblue", fontFamily: "cursive" }}>Contenido Desarrollado por NicoMorgani /
                        <Image
                            src="/githubb.png"
                            width={40}
                            height={40}
                            alt="imagen de github"
                            style={{ borderRadius: "50%" }}
                        />   </p>

                </Col>
                <Col >
                    <Image
                        src="/store.png"
                        width={150}
                        height={60}
                        alt="playstore"

                    />


                </Col>
            </Row>
            <Row style={{ color: "black", height: "40px" }}>

            </Row>


        </Container>


    )
}

export default Footer
"use client"

import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample2() {
  return (
    <Card className="text-center" bg='primary' style={{  marginTop:"60px",fontWeight:"bold"}}>
      
      <Card.Body >
        <Card.Title style={{fontWeight:"bold",color:"black"}}>Descarga la App </Card.Title>
        <Card.Text style={{color:"white",fontFamily:"sans-serif", fontSize:"1.5rem"}} >
        
La Operación Rosario fue el asalto anfibio realizado por Argentina en 1982 durante la Guerra de las Malvinas.
 Consistió en la ocupación de la isla Soledad, permitiendo establecer una presencia militar argentina en las Islas Malvinas.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted" style={{fontFamily:"initial", color:"Window"}}>Operacion Rosario</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample2;
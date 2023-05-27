"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center" style={{backgroundColor:"darkslateblue",  marginTop:"60px",boxShadow:"5px 5px 5px ",fontWeight:"bold"}}>
      
      <Card.Body >
        <Card.Title style={{fontWeight:"bold",color:"black"}}>Descarga la App </Card.Title>
        <Card.Text style={{color:"white",fontFamily:"sans-serif", fontSize:"1.5rem"}} >
        App sobre las Islas Malvinas argentinas es una fuente de diversión y aprendizaje.
         Con juegos interactivos y contenido educativo, los usuarios pueden explorar y
          aprender sobre la historia, geografía y cultura de las islas mientras se divierten.
           ¡Descárgala y disfruta de esta experiencia única!
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted" style={{fontFamily:"initial"}}>Operacion Rosario</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;
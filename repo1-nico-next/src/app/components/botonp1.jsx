import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{margin:30}}
        
      >
        Empezar
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
            app sobre las Islas Malvinas argentinas es una fuente de diversión y aprendizaje.
             Con juegos interactivos y contenido educativo, los usuarios pueden explorar y
              aprender sobre la historia, geografía y cultura de las islas mientras se divierten.
               ¡Descárgala y disfruta de esta experiencia única!
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}


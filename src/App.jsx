/* import { useState } from "react"; */
import { Container } from "react-bootstrap";
import "./App.css";
import Button from 'react-bootstrap/Button'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <div>
        <p>Random Number:5</p>
      </div>
      <div>
        <p>Min:</p>
        <input type="number" />
      </div>
      <div>
        <p>Max:</p>
        <input type="number" />
      </div>
      <Button variant="primary">Get Random Number</Button>
    </Container>
  );
}

export default App;

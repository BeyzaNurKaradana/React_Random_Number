import { useState } from "react"; 
import { Container } from "react-bootstrap";
import "./App.css";
import Button from 'react-bootstrap/Button'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [minVal, setMinval] = useState(0);
  const [maxVal, setMaxval] = useState(10);
  const [randomNum, setRandomNum] = useState(5);

  const giveRandomNumber = () => {
    setRandomNum(Math.floor(Math.random()*(maxVal-minVal +1)+minVal))
  }



  return (
    <Container>
      <div>
        <p>Random Number:<span>{randomNum}</span></p>
      </div>
      <div>
        <p>Min:</p>
        <input type="number" value={minVal} onChange={e => setMinval(+e.target.value)} />
      </div>
      <div>
        <p>Max:</p>
        <input type="number" value={maxVal} onChange={e => setMaxval(+e.target.value)} />
      </div>
      <Button className="mt-4" variant="primary" onClick={giveRandomNumber}>Get Random Number</Button>
    </Container>
  );
}

export default App;

import Button from './Button.jsx';
import Card from './Card.jsx';
import './App.css';
import { useState } from "react";
import { CountContext } from './CountContext.jsx';

export default function App(){

  const [ count, setCount ] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <>
      <CountContext.Provider value={count}>
        <h1>hello world!</h1>
        <Button incrementCount={incrementCount} count={count}/>
        <Card padding="large">
          <p>oooo trying out Card!</p>
        </Card>
        <Card padding="small">
          <Button incrementCount={incrementCount} count={count}/>
        </Card>
      </CountContext.Provider>
      
    </>
  );
}
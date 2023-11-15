import { useContext } from "react";
import { CountContext } from './CountContext.jsx';

export default function Button({ incrementCount, count}){
    const countThroughContext = useContext(CountContext);

    return(
     <button onClick={incrementCount}>Button has been clicked {count} times!</button>
    );
}
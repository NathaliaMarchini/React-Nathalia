import { useState } from "react";
import "./style.css";

/* sem o export o componente nao podera ser visto/exportado */
export function Contador(){
    // usando hooks

    const [Contador, setContador] = useState(0);



    const clickIncrement = () => {
        setContador(Contador + 1);
    }

    const clickDecrement = () =>{
        setContador(Contador -1);
    }

    return (
        <div>
            <h1>Contador</h1>

            <section className="buttons">
                <button onClick={clickIncrement}>Increment</button>
                <button onClick={clickDecrement}>Decrement</button>
            </section>
            
            <section className="result">
                <strong>{Contador}</strong>
            </section>
        </div>
    )
}
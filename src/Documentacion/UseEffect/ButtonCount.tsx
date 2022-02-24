import React, {useState, useEffect} from 'react';

const ButtonCount = ()=>{
    let [cont, setCount] = useState(0);

    useEffect(()=>{
        document.title = `el contador actual es ${cont}`;

        return ()=>{
            document.title = `listo ${cont}`;
        }
    }, [cont]);

    return (
        <div>
            <button className="btn btn-primary" onClick={() => setCount(cont + 1)}>
                Contar
            </button>
            <button className="btn btn-default" onClick={() => setCount(0)}>
                Reiniciar
            </button>
            <h1>{cont}</h1>
        </div>
    );
}

export default ButtonCount;
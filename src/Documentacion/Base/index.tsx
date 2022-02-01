import React from 'react';
import ReactDOM from 'react-dom';
import Hola from "./Hola";
import ShoppingList from "./ShoppingList";

ReactDOM.render(
    <React.StrictMode>
        <h1> Hola mundo </h1>
        <Hola/>
        <ShoppingList name={"Compras"} edad={"40"}/>
    </React.StrictMode>,
    document.getElementById('root')
);


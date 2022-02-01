const ShoppingList = ({name, edad}: {name:string, edad:string})=>{
    return (
        <div className="shopping-list">
            <h1>Lista de compras para {name} {edad}</h1>
            <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
            </ul>
        </div>
    );
}

export default ShoppingList;
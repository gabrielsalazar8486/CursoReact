import React from 'react';
import {MyContext, useMyContext} from "./GeneralContext";
import ReactDOM from 'react-dom';



const  Columns = () => {
    const {name, lastName } = useMyContext();
    return (
        <React.Fragment>
            <td> {name}</td>
            <td> {lastName}</td>
        </React.Fragment>
    );
}

const Table = () =>{
        return (
            <div>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Columns/>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}

ReactDOM.render(
    <React.StrictMode>
        <MyContext.Provider value={{ name:'Gabriel', lastName:'Salazar'}}>
            <Table />
        </MyContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


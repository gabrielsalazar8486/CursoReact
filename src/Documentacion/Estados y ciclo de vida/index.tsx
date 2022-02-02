import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './Clock';
import ClockClass from './ClockClass'

// setInterval(()=>{
//     ReactDOM.render(
//         <React.StrictMode>
//             <Clock date={new Date().toLocaleTimeString()}/>
//         </React.StrictMode>
//         , document.getElementById('root'));
// }, 1000);

ReactDOM.render(
    <React.StrictMode>
        <ClockClass/>
    </React.StrictMode>,
    document.getElementById('root')
);


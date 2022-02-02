import React from "react";

type Props = {};
type States = {date:Date};
let timerID:any;

class ClockClass extends React.Component <Props,States >{
    constructor(props:object) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>son las {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    };
}

export default ClockClass;
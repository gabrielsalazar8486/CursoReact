import React from 'react';

type States = {isToggleOn:boolean};
type Props = {};

class Toggle extends React.Component <Props, States>{
    constructor(props:object) {
        super(props);
       this.state = {isToggleOn:true};
       // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                { this.state.isToggleOn ? 'ON' : 'OFF' }
            </button>
        );
    }
}

export default Toggle;
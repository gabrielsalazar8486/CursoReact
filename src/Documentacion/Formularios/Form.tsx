import React from 'react';

type Props = {};
type States = {
    name:string,
    lastName:string,
    phoneNumber:string
};

class Form extends React.Component <Props, States>{
    constructor(props:object) {
        super(props);
        this.state = {name: '', lastName:'', phoneNumber: ''};

    }
    render() {

        return (
            <form >
                <div className="row">
                    <div className="col-md-4 col-lg-4"> </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="row"> {this.Name()} </div>
                        <div className="row"> {this.LastName()} </div>
                        <div className="row"> {this.PhoneNumber()}</div>
                        <div className="row"> <div>{this.state.name} {this.state.lastName} </div> </div>
                        <div className="row"> <div>{this.state.phoneNumber} </div> </div>
                        <div className="row">
                            <button type="button" className="btn btn-default col-md-3 col-lg-3"> Cancelar </button>
                            <button type="submit" className="btn btn-primary col-md-3 col-lg-3"> Guardar </button>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4"> </div>
                </div>

            </form>

        );
    }

    Name = () => (
        <label> Nombre <br/>
            <input type="text" name="name" className="form-group col-md-12 col-lg-12" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        )

    LastName = () => (
        <label> Apellido <br/>
            <input type="text" name="name" className="form-group col-md-12 col-lg-12" value={this.state.lastName} onChange={this.handleChangeLastName} />
        </label>
    )

    PhoneNumber = () => (
        <label> Telefono <br/>
            <input type="phone" name="name" className="form-group col-md-12 col-lg-12" value={this.state.phoneNumber} onChange={this.handleChangePhoneNumber} />
        </label>
    )


    handleChangeName = (event: React.FormEvent<HTMLInputElement>): void =>
    { this.setState({name: event.currentTarget.value});}

    handleChangeLastName = (event: React.FormEvent<HTMLInputElement>): void =>
    { this.setState({lastName: event.currentTarget.value});}

    handleChangePhoneNumber = (event: React.FormEvent<HTMLInputElement>): void =>
    { this.setState({phoneNumber: event.currentTarget.value});}

}

export default Form;

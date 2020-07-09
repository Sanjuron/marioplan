import React, { Component } from 'react';

class SignUp extends Component {
    state = { 
        email: '',
        password: '',
        firstname: '',
        lastname: '',
     }

    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }   

    render() { 

        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" name="" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="firstname">Prénom</label>
                            <input type="text" name="" id="firstname" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastname">Nom</label>
                            <input type="text" name="" id="lastname" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        </div>
                </form>
            </div>
         );
    }
}
 
export default SignUp;
import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component{
    state ={
        name: '',
    };

    handleChange = event => {
        this.setState({ email: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
        }

        axios 
            .post(`https://jsonplaceholder.typicode.com/users`, {user})
            .then(res => {
                console.log(res.data);
                alert('you are sign in:   ' + this.state.email)
            })
    };

    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                     E-mail:
                    <input type="email" name="name" onChange={this.handleChange} />
                </label><br/><br/>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label><br/><br/>
                <button type="submit" >Submit</button>
                
            </form>
        );
    }
}
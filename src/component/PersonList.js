import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component{
    state ={
        persons: []
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            console.log(res);
            this.setState({ Persons: res.data});
        })
    }

    render(){
        return(
            <ul>
                {this.state.persons.map(Person  => (
                    <li key={Person.id}> {Person.name}</li>
                ))}
            </ul>
        )
    }
}
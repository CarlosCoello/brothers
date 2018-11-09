import React, { Component } from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Label from '../Label/Label';
import Validation from '../Validation/Validation';

// css
import './Home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            nameRegex: '',
            emailRegex: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        let val = event.target.value;
        let name = event.target.name;

        if(name === 'name'){
            const pat = new RegExp(/^[a-zA-Z\s{1,}]+$/g);
            if(!pat.test(val) && val){
                this.setState({
                    nameRegex: 'no numbers are allowed',
                    [event.target.name]: val
                });
            } else {
                this.setState({ 
                    nameRegex: '',
                    [event.target.name]: val,
                });
            }
        }
        if(name === 'email'){
            const pat = new RegExp(/[a-z0-9._%+-\S]+@[a-z0-9.-\S]+\.[a-z]{2,}$/gi);
            if(!pat.test(val) && val){
                this.setState({
                    emailRegex: 'email must have @ and dot something',
                    [event.target.name]: val
                });
            } else {
                this.setState({ 
                    emailRegex: '',
                    [event.target.name]: val 
                });
            }
        }
    } // handle change closing tag

    handleFormSubmit(event){
        event.preventDefault();
        let obj = {
            name: this.state.name,
            email: this.state.email
        }
        console.log(obj);
        this.setState({
            name: '',
            email: ''
        })
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                </header>
                <Form formOnSubmit={this.handleFormSubmit}>
                    <Label 
                        innerText='name' />
                    <Input 
                        type='text'
                        name='name'
                        placeholder='name...'
                        onChange={this.handleChange}
                        value={this.state.name} />
                    <Validation message={this.state.nameRegex}/>
                        <Label 
                        innerText='email' />
                    <Input 
                        type='text'
                        name='email'
                        placeholder='email...'
                        onChange={this.handleChange}
                        value={this.state.email} />
                    <Validation message={this.state.emailRegex}/>
                    <button  onClick={this.handleFormSubmit} disabled={(this.state.nameRegex || this.state.emailRegex || !this.state.name || !this.state.email)  ? true : false}>Send</button>
                </Form>
            </div>
        )
    }
}

export default Home;
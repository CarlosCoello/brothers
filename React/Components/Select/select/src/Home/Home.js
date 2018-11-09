import React, { Component } from 'react';
import Select from '../Select/Select';
import Option from '../Option/Option';

// css
import './Home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            option: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const val = event.target.value;
        this.setState({
            option: val
        })
    }

    addOptions(array){
        return array.map((a,i) => {
            return (
                <Option key={`${a}${i}`} value={a} innerText={a} />
            )
        })
    }

    render(){
    console.log(this.state.option);
    // mock data
    const users = [
        'carlos',
        'david',
        'valeria',
        'luis'
    ]
    users.sort();

        return(
            <div>
                <Select selectOnChange={this.handleChange}>
                    <Option value='all' innerText='all' />
                    {this.addOptions(users)}
                </ Select>
            </div>
        )
    }
}

export default Home;
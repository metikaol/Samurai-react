import React, { Component } from 'react';
import {connect} from 'react-redux'
import { saveData } from './actions'
import ShowAll from './ShowAll'
class Home extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const code = this.getCode.value;
        saveData(code, this.props.dispatch)
    }

    render(){
        return(
            <div>
                <h1> Giphy Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="Enter Code" ref={(input)=>this.getCode = input} /> <br /> <br />
                    <button>Submit</button>
                </form>
                <ShowAll/>
            </div>
        )    
    }
}

export default connect()(Home)
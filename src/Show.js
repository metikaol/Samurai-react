import React, { Component } from 'react';

class Show extends Component {
    render(){
        const { data } = this.props
        return(
            <div >
                <video width="320" height="240" loop autoPlay muted>
                    <source src={data.images.downsized_small.mp4}  type="video/mp4"/>
                </video>
            </div>
        )    
    }
}


export default (Show)
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Show from './Show'
import './App.css'

class ShowAll extends Component {

    render(){
        const {videos} = this.props
        return(
            <div>
                {Object.keys(videos).length > 0
                ?
                    <div>
                        <h1> Result </h1>
                        <div className="videoContainer">
                            {videos.data.map(data => <Show key={data.id} data={data} />)}
                        </div>
                    </div>
                :
                ""
                }
            </div>
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.giphy
    }
}

export default connect(mapStateToProps)(ShowAll)
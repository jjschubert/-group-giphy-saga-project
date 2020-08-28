import React, {Component} from 'react';
import {connect} from 'react-redux';
import Display from '../DisplayGIFs/DisplayGIFs.js'

class Search extends Component {
    state = {
        search: ''
    };

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    };

    getGIFs = () => {
        this.props.dispatch({type:'FETCH_GIFS', payload:this.state})
    };

    clearInput = () => {
        this.setState({
            search:''
        })
    }
    render() {
        return(
            <>
            <form>
                <input placeholder='Search GIFs' onChange={this.handleChange} value={this.state.search} />
                <button onClick={() => {this.getGIFs(); this.clearInput()}}>Get GIFs</button>
            </form>

            <Display />
            </>
        )
    }
}

export default connect()(Search);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './DisplayGifs.css';

class Display extends Component {
    saveGIF = (gif) => {
        axios.post('/api/favorite', gif)
        .then(response => {
            console.log('added to favorites on db!')
        }).catch(error => {
            console.log('error in POST:', error)
        })
    }
    render() {
        return (
            <div className='container'>
            {this.props.reduxState.searchResults.map((gif, i) => (
                    <div key={i} className='item'>
                        <img src={gif.url} alt='gif' />
                        <br />
                        <button onClick={() => this.saveGIF(gif)}>Favorite</button>
                    </div>  
                ))
            }
            </div>
        )
    }
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapPropsToState)(Display)


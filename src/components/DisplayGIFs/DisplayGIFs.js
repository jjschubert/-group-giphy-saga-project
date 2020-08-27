import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

function Display(props) {
    saveGIF = (gif) => {
        this.props.dispatch({ type: 'SAVE_FAV', payload: gif })
    }

    return (
        {
            this.props.reduxState.searchResults.map((gif, i) => (
                <div key={i}>
                    <img src={gif.url} alt='gif' />
                    <button onClick={() => this.saveGIF(gif)}>Favorite</button>
                </div>
            ))
        }
    )
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapPropsToState)(Display)


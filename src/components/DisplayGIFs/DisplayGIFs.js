import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Display extends Component {
    saveGIF = (gif) => {
        this.props.dispatch({ type: 'SAVE_FAV', payload: gif })

    }
    render() {
        return (
            <>
            {this.props.reduxState.searchResults.map((gif, i) => (
                    <div key={i}>
                        <img src={gif.url} alt='gif' />
                        <button onClick={() => this.saveGIF(gif)}>Favorite</button>
                    </div>  
                ))
            }
            </>
        )
    }
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapPropsToState)(Display)


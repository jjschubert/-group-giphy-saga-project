import React, {Component} from 'react';
import {connect} from 'react-redux'

class Favorite extends Component {
  
componentDidMount() {
    this.props.dispatch({type: 'GET_FAVORITES'})
}

    render() {
        return(
            <>
            <h3>Favorites</h3>
            </>
        )
    }
}

export default connect()(Favorite)
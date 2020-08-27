import React, { Component } from 'react';
import { connect } from 'react-redux'

class Favorite extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_FAVORITES' })
    }

    render() {
        return (
            <>
                <h3>Favorites</h3>
                {this.props.reduxState.favoriteGifs.map((gif) => {
                    return (
                        <>
                            <img src={gif.image_path} alt={gif.name} key={gif.id}/>
                            <p>{gif.name}</p>
                        </>
                    )
                })}
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Favorite)
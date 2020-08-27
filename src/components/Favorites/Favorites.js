import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoryForm from '../CategoryForm/CategoryForm';

class Favorite extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_FAVORITES' })
    }

    state = {
        category: ''
    }

    render() {
        return (
            <>
                <h3>Favorites</h3>
                
                {this.props.reduxState.favoriteGifs.map((gif) => {
                    return (
                        <div key={gif.id}>
                            <img src={gif.image_path} alt={gif.name} />
                            <p>Category: {gif.name}</p>
                            <CategoryForm id={gif.id}/>
                        </div>
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
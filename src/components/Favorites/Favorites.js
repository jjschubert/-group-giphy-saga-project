import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoryForm from '../CategoryForm/CategoryForm';
import './Favorites.css'

class Favorites extends Component {

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
                <div className='container'>
                {this.props.reduxState.favoriteGifs.map((gif) => {
                     console.log(gif.id);
                    return (
                        <div key={gif.id} className='item'>
                            <img src={gif.image_path} alt={gif.name} />
                            <p>Category: {gif.name}</p>
                            <CategoryForm id={gif.id}/>
                        </div>
                    )
                })}
                </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Favorites)
import React, { Component } from 'react';
import { connect } from 'react-redux'

class CategoryForm extends Component {


    state = {
        category: 1
    }

    handleChange = (event) => {
        if (event.target.value === 'funny') {
            this.setState({
                category: 1
            })
        } else if (event.target.value === 'cohort') {
            this.setState({
                category: 2
            })
        } else if (event.target.value === 'cartoon') {
            this.setState({
                category: 3
            })
        } else if (event.target.value === 'NSFW') {
            this.setState({
                category: 4
            })
        } else if (event.target.value === 'meme') {
            this.setState({
                category: 5
            })
        }
    }

    addCategory = (id) => {
        console.log('id', this.props.id)
        console.log('category', this.state.category);
        let gifToLabel = { id: id, category: this.state.category }
        this.props.dispatch({ type: 'ADD_CATEGORY', payload: gifToLabel })
    }

    render() {
        console.log(this.state.category);

        return (
            <>
                <label>Choose a Category:</label>
                <select name="category" id="category" onChange={(event) => this.handleChange(event)}>
                    <option value="funny">funny</option>
                    <option value="cohort">cohort</option>
                    <option value="cartoon">cartoon</option>
                    <option value="NSFW">NSFW</option>
                    <option value="meme">meme</option>
                </select>
                <button onClick={() => this.addCategory(this.props.id)}>Set Category</button>


            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(CategoryForm)
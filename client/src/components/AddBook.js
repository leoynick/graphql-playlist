import React, { Component} from 'react'
import { graphql, compose } from 'react-apollo'

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'

class AddBook extends Component { 
    state = { name: '', genre: '', authorId:''}
    
    submitForm = e => {
        e.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                author: this.state.authorId
            },
            refetchQueries: [{ query:getBooksQuery }]
        })
    }

    render() {
        const { loading, authors } = this.props.getAuthorsQuery

        return (
            <div>
                <form id="add-book" onSubmit={e => this.submitForm(e)}>
                    <div className="field">
                        <label>Book Name:</label>
                        <input onChange={ e => this.setState({ name: e.target.value}) } type="text" name="" id=""/>
                    </div>
                    <div className="field">
                        <label>Genre:</label>
                        <input onChange={ e => this.setState({ genre: e.target.value}) } type="text" name="" id=""/>
                    </div>
                    <div className="field">
                        <label>Author:</label>
                        <select onChange={ e => this.setState({ authorId: e.target.value}) }>
                            {loading 
                            ? <option>Loading...</option>
                            : authors && authors.map(a => <option key={a.id}>{a.name}</option>)}
                        </select>
                    </div> 
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default compose(
    graphql(getAuthorsQuery, { name : 'getAuthorsQuery'}),
    graphql(addBookMutation, { name: 'addBookMutation'})
)(AddBook)
import React from 'react'
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries'

export default graphql(getBookQuery, {
    options: props => { return { variables: { id: props.bookId }}}
})( props  => (
    <div>
        <h2>This is the Detail</h2>
        <div>
            {props.data.book
            ? <h3>{props.data.book && props.data.book.name}</h3>
            : <div>Nada...</div>}
        </div>
    </div>
))
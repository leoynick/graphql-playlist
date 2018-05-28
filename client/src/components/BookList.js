import React from 'react'
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries'

export default graphql(getBooksQuery)( props => (
    <div>
        {props.data.loading 
            ? <h2>Cargando</h2>
            : <ul>{props.data.books.map(b => <li key={b.id}>{b.name}</li>)}</ul>
        }
    </div>
))
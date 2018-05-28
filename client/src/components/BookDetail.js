import React from 'react'
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries'

export default graphql(getBookQuery)( props => (
    <div>
        <h2>This is the Detail</h2>
        <div>
            {/* {console.log(getBookQuery)} */}
        </div>
    </div>
))
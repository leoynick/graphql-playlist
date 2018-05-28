import { gql } from 'apollo-boost'

const getAuthorsQuery = gql`
{
    authors {
        id
        name
    }
}`

const getBooksQuery = gql`
{
    books {
        id
        name
    }
}`

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $author: ID!) {
        addBook(name: $name, genre:$genre, authorId: $author){
            name
            id
        }
    }
`;

const getBookQuery = gql`
    query($id: ID){
        book(id: $id){
            name
            id
            genre
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery }
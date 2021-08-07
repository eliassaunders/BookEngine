import gql from 'graphql-tag'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id 
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookId: String!, $authors: [String!], $description: String!, $title: String!, $link: String!) {
        saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, link: $title) {
            _id
            username
            savedBooks {
                bookId
                authors
                description
                title
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String) {
        removeBook(bookId: $bookId) {
            username
            email
            savedBooks {
                title
            }
        }
    }
`;
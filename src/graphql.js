import gql from 'graphql-tag'

export const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allUsers {
      id
      username
      email
    }
  }
`

export const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts {
      id
      title
      slug
      user {
        username
      }
    }
  }
`

export const USER_QUERY = gql`
  query UserQuery($id: Int!) {
    user(id: $id) {
      id
      username
      email
      posts {
        id
      }
    }
  }
`

export const POST_QUERY = gql`
  query PostQuery($slug: String!) {
    post(slug: $slug) {
      id
      title
      slug
      content
      user {
        id
        username
        email
      }
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($username: String!, $email: String!, $password: String!) {
    createUser(
      username: $username,
      email: $email,
      password: $password
    ) {
      id
      username
      email
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(
      email: $email,
      password: $password
    )
  }
`

export const ADD_POST_MUTATION = gql`
  mutation AddPostMutation($title: String!, $content: String!) {
    addPost(
      title: $title,
      content: $content
    ) {
      id
      slug
      title
      content
      user {
        id
        username
        email
      }
    }
  }
`

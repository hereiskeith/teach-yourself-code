import gql from "graphql-tag";

const fetchUser = gql`
  query GetUser($email: String) {
    users(where: { email: { _eq: $email } }) {
      id
      email
      auth0_id
      created_at
    }
  }
`;

// Fetches playlists the user has subscribed to
const fetchUserPlaylists = gql`
  query GetUserPlaylists {
    user_playlists(where: { user_id: { _eq: 2 } }) {
      playlist {
        id
        title
        description
        thumbnail
        playlist_id
        channel
      }
    }
  }
`;

// Fetches playlists for specific topic user chooses
const fetchPlaylists = gql`
  query GetPlaylists($topic: String) {
    playlists(where: { topic: { title: { _eq: $topic } } }) {
      id
      title
      channel
      description
      thumbnail
      playlist_id
      topic_id
    }
  }
`;

export { fetchUser, fetchUserPlaylists, fetchPlaylists };
import { useQuery, gql } from '@apollo/client';

const GET_MOVIE = gql`
query {
    movies {
      popular {
        edges {
          node {
            originalTitle
            budget
            genres {
              name
            }
          }
        }
      }
    }
  }
`

export const useMovie = () => {
    const {error, data, loading} = useQuery(GET_MOVIE);
    return {error,data,loading}
}
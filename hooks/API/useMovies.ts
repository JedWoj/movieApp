import { useQuery, gql } from '@apollo/client';

export type PopularMoviesEdgeType = {
  __typename: string,
  node: {
    __typename: string,
    id: string,
    poster: string,
    title: string
  }
}

type PopularMovies = {
  movies: {
    popular: {
      __typename: string,
      edges: PopularMoviesEdgeType[]
    }
  }
} 

const GET_MOVIE = gql`
query {
    movies {
      popular {
        edges {
          node {
            id
            title
            poster(size:W342)
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
  const {error, data, loading} = useQuery<PopularMovies>(GET_MOVIE);
  return {error,data,loading};
}
import { useQuery, gql } from '@apollo/client';

type popularMoviesGenre = {
  __typename: string,
  name: string,
}

type popularMoviesEdge = {
  __typename: string,
  node: {
    __typename: string,
    originalTitle: string,
    budget: number,
    genres: popularMoviesGenre[]
  }
}

type popularMovies = {
  movies: {
    popular: {
      __typename: string,
      edges: popularMoviesEdge[]
    }
  }
} 

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
  const {error, data, loading} = useQuery<popularMovies>(GET_MOVIE);
  return {error,data,loading};
}
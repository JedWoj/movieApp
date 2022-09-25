import type { NextPage } from 'next'
import { useMovie } from '../hooks/useMovies'

const Home: NextPage = () => {
  const {data,error,loading} = useMovie();
  console.log(data,error,loading)

  return (
    <div>
      Chakra is Awesome
    </div>
  )
}

export default Home

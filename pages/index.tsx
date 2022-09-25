import type { NextPage } from 'next'
import { useMovie } from '../hooks/useMovies'
import CarouselSlider from '../components/CarouselSlider/CarouselSlider';

const Home: NextPage = () => {
  const {data,error,loading} = useMovie();
  console.log(data,error,loading)

  return (
    <div>
      <CarouselSlider />
    </div>
  )
}

export default Home

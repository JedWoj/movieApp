import type { NextPage } from 'next'
import { useMovie } from '../hooks/API/useMovies';
import CarouselSlider from '../components/CarouselSlider/CarouselSlider';

const Home: NextPage = () => {
  const {data,error,loading} = useMovie();
  console.log(data?.movies.popular)
  return (
    <div>
      <CarouselSlider movies={data?.movies.popular.edges}/>
    </div>
  )
}

export default Home;
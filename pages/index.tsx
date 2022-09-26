import type { NextPage } from 'next'
import { useMovie } from '../hooks/API/useMovies'
import CarouselSlider from '../components/CarouselSlider/CarouselSlider';

const DUMMY_ARR = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const Home: NextPage = () => {
  // const {data,error,loading} = useMovie();
  // console.log(data,error,loading)

  return (
    <div>
      <CarouselSlider movies={DUMMY_ARR}/>
    </div>
  )
}

export default Home

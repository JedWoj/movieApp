import type { GetStaticProps, NextPage } from 'next';
import CarouselSlider from '../components/CarouselSlider/CarouselSlider';
import { TrendingMoviesType } from '../types/trendingMoviesType';

const Home = ({trendingMovies}: TrendingMoviesType) => {
  console.log(trendingMovies);
  return (
    <div>
      <CarouselSlider name='Explore Popular Films' movies={trendingMovies.results}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.MOVIE_API}`);
  const trendingMovies = await response.json();
  console.log(trendingMovies);
  return {
    props: {trendingMovies},
    revalidate: 120
  }
}

export default Home;
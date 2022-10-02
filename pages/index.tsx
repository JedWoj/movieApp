import { Box } from '@chakra-ui/react';
import type { GetStaticProps } from 'next';
import CarouselSlider from '../components/CarouselSlider/CarouselSlider';
import { TrendingMoviesType } from '../types/trendingMoviesType';

const Home = ({trendingMovies}: TrendingMoviesType) => {
  return (
    <Box>
      <CarouselSlider name='Explore Popular Films' movies={trendingMovies.results}/>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.MOVIE_API}`);
  const trendingMovies = await response.json();

  return {
    props: {trendingMovies},
    revalidate: 120
  }
}

export default Home;
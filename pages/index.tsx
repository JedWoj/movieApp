import { Box } from '@chakra-ui/react';
import type { GetStaticProps } from 'next';
import CarouselSlider from '../components/CarouselSlider/CarouselSlider';
import { TrendingMoviesType } from '../types/trendingMoviesType';
import { UpcomingMovieType } from '../types/upcomingMovieType';
import { getFormattedPromise } from '../lib/getFormattedPromise';

interface HomeType {
  trendingMovies: TrendingMoviesType,
  topRated: TrendingMoviesType,
  upcoming: UpcomingMovieType
}

const Home = ({trendingMovies, topRated, upcoming}: HomeType) => {
  return (
    <Box paddingBottom={'10'}>
      <CarouselSlider name='Top Rated Movies' movies={topRated.results} />
      <CarouselSlider name='Explore Popular Films' movies={trendingMovies.results}/>
      <CarouselSlider name='Upcoming Films' movies={upcoming.results}/>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [trendingMovies, topRated, upcoming] = await Promise.all([
    getFormattedPromise(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`),
    getFormattedPromise(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`),
    getFormattedPromise(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`),
]);
  
  return {
    props: {trendingMovies, topRated, upcoming},
    revalidate: 120
  }
}

export default Home;
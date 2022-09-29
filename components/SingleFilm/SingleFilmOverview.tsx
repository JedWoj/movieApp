import react from 'react';
import { Flex, Text, Box } from '@chakra-ui/react'; 
import { SingleMovieType } from '../../types/singleMovieType';
import Image from 'next/image';

const SingleFilmOverview = ({movie}: SingleMovieType) => {
    console.log(movie)
    
    const renderGenres = () => {
        const genres = movie.genres.map(gen => <Text key={gen.id}>- {gen.name}</Text>);
        return genres;
    }
    
    const renderCountries = () => {
        const countries = movie.production_countries.map(gen => <Text key={Math.random()}>- {gen.name}</Text>);
        return countries;
    }

    return(
        <Flex gap={'5'} marginY={'16'}>
            <Image width={'850vw'} height={'1000vw'} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster of ${movie.title}`} />
            <Box>
                <Text>
                    {movie.overview}
                </Text>
                <Text marginTop={'5'}>
                    Budget: {movie.budget === 0 ? 'uknown' : `${movie.budget}$`}
                </Text>
                <Text marginTop={'5'}>
                    Revenue: {movie.revenue === 0 ? 'uknown' : `${movie.revenue}$`}
                </Text>
                <Text marginTop={'5'}>
                    Genres:
                </Text>
                {renderGenres()}
                <Text marginTop={'5'}>
                    Production Countries
                </Text>
                {renderCountries()}
            </Box>
        </Flex>
    )
}

export default SingleFilmOverview;
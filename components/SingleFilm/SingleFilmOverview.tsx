import react from 'react';
import { Flex, Text, Box } from '@chakra-ui/react'; 
import { SingleMovieType } from '../../types/singleMovieType';
import Image from 'next/image';

interface SingleFilmOverviewProps {
    movieInfo: SingleMovieType;
}

const SingleFilmOverview = ({movieInfo}: SingleFilmOverviewProps) => {
    const renderGenres = () => {
        const genres = movieInfo.genres.map(gen => <Text key={gen.id}>- {gen.name}</Text>);
        return genres;
    }
    
    const renderCountries = () => {
        const countries = movieInfo.production_countries.map(gen => <Text key={Math.random()}>- {gen.name}</Text>);
        return countries;
    }

    return(
        <Flex gap={'5'} marginY={'16'} fontWeight={'bold'}>
            <Image width={'850vw'} height={'1000vw'} src={movieInfo.poster_path ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`: '/../public/images/unknown.png'} alt={`Poster of ${movieInfo.title}`} />
            <Box>
                <Text>
                    {movieInfo.overview}
                </Text>
                <Text marginTop={'5'}>
                    Budget: {movieInfo.budget === 0 ? 'uknown' : `${movieInfo.budget}$`}
                </Text>
                <Text marginTop={'5'}>
                    Revenue: {movieInfo.revenue === 0 ? 'uknown' : `${movieInfo.revenue}$`}
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
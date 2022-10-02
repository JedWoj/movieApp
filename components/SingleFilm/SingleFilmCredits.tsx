import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { MovieCreditsType } from '../../types/movieCreditsType';
import CastGrid from '../../components/CastGrid/CastGrid';

interface SingleFilmCreditsType {
    movieCredits: MovieCreditsType
}

const SingleFilmCredits = ({movieCredits}: SingleFilmCreditsType) => {
    return(
        <Box>
            <Heading marginY={'8'}>
                Cast of the movie
            </Heading>
            <CastGrid persons={movieCredits.cast.slice(0,6)} />
        </Box>
    )
}

export default SingleFilmCredits;
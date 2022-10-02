import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { MovieCreditsCast, MovieCreditsCrew } from '../../types/movieCreditsType';
import CastGrid from '../../components/CastGrid/CastGrid';

interface SingleFilmCreditsType {
    movieCredits: MovieCreditsCast[] | MovieCreditsCrew[],
    type: string
}

const SingleFilmCredits = ({movieCredits, type}: SingleFilmCreditsType) => {
    console.log(movieCredits)
    return(
        <Box>
            <Heading marginY={'8'}>
                {type} of the movie
            </Heading>
            <CastGrid persons={movieCredits.slice(0,6)} />
        </Box>
    )
}

export default SingleFilmCredits;
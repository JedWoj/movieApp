import React from 'react';
import { Box } from '@chakra-ui/react';
import { MovieCreditsType } from '../../types/movieCreditsType';
import CastGrid from '../../components/CastGrid/CastGrid';

interface SingleFilmCreditsType {
    movieCredits: MovieCreditsType
}

const SingleFilmCredits = ({movieCredits}: SingleFilmCreditsType) => {
    return(
        <Box>
            <CastGrid persons={movieCredits.cast.slice(0,6)} />
        </Box>
    )
}

export default SingleFilmCredits;
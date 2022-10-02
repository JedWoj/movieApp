import React from 'react';
import { Box,Heading } from '@chakra-ui/react';
import { MovieReviewsType } from '../../types/movieReviewsType';
import Reviews from '../Reviews/Reviews';

interface SingleFilmReviewsType {
    reviews: MovieReviewsType;
}

const SingleFilmReviews = ({reviews}: SingleFilmReviewsType) => {
    return(
        <Box width={'100%'}>
            <Heading>
                Reviews
            </Heading>
            <Reviews reviews={reviews} />
        </Box>
    )
}

export default SingleFilmReviews;
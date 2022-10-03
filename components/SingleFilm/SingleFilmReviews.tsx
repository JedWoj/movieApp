import React from 'react';
import { Box,Heading } from '@chakra-ui/react';
import { MovieReviewsType } from '../../types/movieReviewsType';
import Reviews from '../Reviews/Reviews';
import NoReviews from '../Reviews/NoReviews';

interface SingleFilmReviewsType {
    reviews: MovieReviewsType;
}

const SingleFilmReviews = ({reviews}: SingleFilmReviewsType) => {
    return(
        <Box width={'100%'}>
            <Heading>
                Reviews
            </Heading>
            {reviews.results.length !== 0 ? <Reviews reviews={reviews} /> : <NoReviews />}
        </Box>
    )
}

export default SingleFilmReviews;
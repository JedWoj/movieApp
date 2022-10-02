import React from 'react';
import { Box,Flex } from '@chakra-ui/react';
import { MovieReviewsResultType } from '../../types/movieReviewsType';

interface SingleReviewType {
    review: MovieReviewsResultType;
}

const SingleReview = ({review}: SingleReviewType) => {
    return(
        <Box marginY={'4'}>
            <Flex gap={'2'}>
                <Box>
                    {review.author}
                </Box>
                <Box>
                    {new Date(review.created_at).toLocaleTimeString()}
                </Box>
            </Flex>
            <Box>
                {review.content}
            </Box>
        </Box>
    )
}

export default SingleReview;
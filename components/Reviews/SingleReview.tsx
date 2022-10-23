import React from 'react';
import { Box,Flex,Text,Avatar } from '@chakra-ui/react';
import { MovieReviewsResultType } from '../../types/movieReviewsType';
import Card from '../UI/Card';

interface SingleReviewType {
    review: MovieReviewsResultType;
}

const SingleReview = ({review}: SingleReviewType) => {
    return(
        <Card>
            <Flex fontSize={'2xl'} alignItems={'center'} marginBottom={'4'} gap={'2'}>
                <Avatar src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}/>    
                <Text>
                    {review.author}
                </Text>
            </Flex>
            <Text>
                {review.content}
            </Text>
        </Card>
    )
}

export default SingleReview;
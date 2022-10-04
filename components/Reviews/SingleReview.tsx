import React from 'react';
import { Box,Flex,Text,Avatar } from '@chakra-ui/react';
import { MovieReviewsResultType } from '../../types/movieReviewsType';
import Image from 'next/image';

interface SingleReviewType {
    review: MovieReviewsResultType;
}

const SingleReview = ({review}: SingleReviewType) => {
    return(
        <Box bgGradient={'linear(to-tr, #ff335d, #3f5efb)'} padding={'5'} borderRadius={'2xl'} boxShadow={'dark-lg'} marginY={'10'}>
            <Flex fontSize={'2xl'} alignItems={'center'} marginBottom={'4'} gap={'2'}>
                <Avatar src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}/>    
                <Text>
                    {review.author}
                </Text>
            </Flex>
            <Text>
                {review.content}
            </Text>
        </Box>
    )
}

export default SingleReview;
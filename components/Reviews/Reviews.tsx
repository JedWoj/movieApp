import React, { useState } from 'react';
import { MovieReviewsType } from '../../types/movieReviewsType';
import { Box, Button, Flex } from '@chakra-ui/react';
import SingleReview from './SingleReview';

interface ReviewsType {
    reviews: MovieReviewsType
}

const Reviews = ({reviews}: ReviewsType) => {
    const [activePage, setActivePage] = useState<number>(1);
    console.log(reviews)
    
    const renderReviews = () => {
        const activeReviews = reviews.results.slice(0, activePage + 2).map(rev => <SingleReview key={rev.created_at} review={rev} />);
        return activeReviews;
    }

    return(
        <Flex marginBottom={'8'} flexDirection={'column'}>
            <Box marginBottom={'10'}>
                {renderReviews()}
            </Box>        
            {reviews.results.length - (activePage + 2) > 0 && <Button onClick={() => setActivePage((activePage) => activePage + 3)} alignSelf={'center'} colorScheme={'pink'}>
                Load More
            </Button>}
        </Flex>
    )
}

export default Reviews;
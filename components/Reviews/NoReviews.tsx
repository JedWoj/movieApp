import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

const NoReviews = () => {
    return(
        <Box backgroundColor={'white'} paddingY={'10'} marginY={'10'} borderRadius={'2xl'}>
            <Heading textAlign={'center'} color={'darkorange'}>
                No Reviews Were Added Yet!
            </Heading>
        </Box>
    )
}

export default NoReviews;
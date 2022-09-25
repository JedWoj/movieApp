import React from 'react';
import { Flex } from '@chakra-ui/react';

const CarouselBtnLeft = () => {
    return(
    <Flex 
        position={'absolute'} 
        cursor={'pointer'} 
        justifyContent={'center'} 
        alignItems={'center'} 
        top={0} 
        left={0} 
        bottom={0} 
        width={50} 
        backgroundColor={'rgba(0,0,0,0.25)'}
    >
        -
    </Flex>)
}

export default CarouselBtnLeft;
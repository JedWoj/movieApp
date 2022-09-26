import React from 'react';
import { Center } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

interface CarouselBtnLeftProps {
    setActivePage: Function,
}

const CarouselBtnLeft = ({setActivePage}: CarouselBtnLeftProps) => {
    return(
    <Center 
        position={'absolute'} 
        cursor={'pointer'} 
        top={0} 
        left={0} 
        bottom={0} 
        width={{base: 6}} 
        backgroundColor={'rgba(0,0,0,0.25)'}
        onClick={() => setActivePage('-')}
    >
        <ArrowLeftIcon />
    </Center>)
}

export default CarouselBtnLeft;
import React from 'react';
import { Center } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

interface CarouselBtnRightProps {
    setActivePage: Function;
}

const CarouselBtnRight = ({setActivePage}: CarouselBtnRightProps) => {

    return(
        <Center 
            position={'absolute'} 
            cursor={'pointer'}  
            top={0} 
            right={0} 
            bottom={0} 
            width={{base: 6}} 
            backgroundColor={'rgba(0,0,0,0.25)'}
            onClick={() => setActivePage((activePage: number) => activePage + 1)}
        >
            <ArrowRightIcon />
        </Center>)
}

export default CarouselBtnRight;
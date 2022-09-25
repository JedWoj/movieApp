import React from 'react';
import { Center } from '@chakra-ui/react';

interface CarouselItemProps {
    name: number;
}

const CarouselItem = ({name}: CarouselItemProps) => {
    return(
        <Center width={260} height={200} flexShrink={'0'} backgroundColor={'red.400'}>
            {name}
        </Center>
    )
}

export default CarouselItem;
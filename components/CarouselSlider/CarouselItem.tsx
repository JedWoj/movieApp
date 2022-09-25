import React from 'react';
import { Center } from '@chakra-ui/react';

interface CarouselItemProps {
    name: number;
}

const CarouselItem = ({name}: CarouselItemProps) => {
    return(
        <Center width={{base: 20}} height={{base: 20}} flexShrink={{base: 1}} backgroundColor={'red.400'}>
            {name}
        </Center>
    )
}

export default CarouselItem;
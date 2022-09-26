import React from 'react';
import { Center } from '@chakra-ui/react';

interface CarouselItemProps {
    name: number;
}

const CarouselItem = ({name}: CarouselItemProps) => {
    return(
        <Center flexGrow={1} height={{base: 20, sm: '32', xl: '40'}} flexShrink={{base: 1}} backgroundColor={'red.400'}>
            {name}
        </Center>
    )
}

export default CarouselItem;
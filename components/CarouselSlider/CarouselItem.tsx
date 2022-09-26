import React from 'react';
import { Center, Image } from '@chakra-ui/react';

interface CarouselItemProps {
    poster: string;
    title: string
}

const CarouselItem = ({poster, title}: CarouselItemProps) => {
    return(
        <Center flexGrow={1} height={{base: 20, sm: '32', xl: '40'}} flexShrink={{base: 1}} backgroundColor={'red.400'}>
            <Image width={20} height={20} src={poster} alt={title}/>
        </Center>
    )
}

export default CarouselItem;
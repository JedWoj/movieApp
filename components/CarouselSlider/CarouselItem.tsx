import React from 'react';
import { Center, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface CarouselItemProps {
    poster?: string;
    title?: string,
    id?: number
}

const CarouselItem = ({poster, title, id}: CarouselItemProps) => {
    return(
        <Center 
            cursor={'pointer'} 
            flexGrow={1} 
            height={{base: '36', sm: '48', xl: '72'}} 
            flexShrink={{base: 1}} 
            backgroundColor={'red.400'}
        >
            <Link href={`/films/${id}`}>
                <Image width={'100%'} height={'100%'} src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title}/>
            </Link>
        </Center>
    )
}

export default CarouselItem;
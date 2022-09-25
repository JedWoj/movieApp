import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import CarouselBtnLeft from './CarouselBtnLeft';
import CarouselBtnRight from './CarouselBtnRight';
import CarouselItem from './CarouselItem';

const CarouselSlider = () => {
  return(
    <Flex overflowX={'hidden'} marginX={'auto'} marginTop={12} gap={9} position={'relative'} backgroundColor={'cyan.100'} maxWidth={'8xl'}>
      <CarouselBtnLeft />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      <CarouselBtnRight />
    </Flex>
  )
}

export default CarouselSlider;





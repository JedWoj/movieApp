import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Center, Flex, Heading } from '@chakra-ui/react';
import CarouselBtnLeft from './CarouselBtnLeft';
import CarouselBtnRight from './CarouselBtnRight';
import CarouselItem from './CarouselItem';
import {TrendingMoviesResult} from '../../types/trendingMoviesType';

interface CarouselSliderProps {
  movies: TrendingMoviesResult[] | undefined,
  name: string,
}

const CarouselSlider = ({movies, name}: CarouselSliderProps) => {
  const { width } = useWindowSize();
  const [activePage, setActivePage] = useState<number>(0);
  const [numOfItems, setNumOfItems] = useState<number>(5); 
  
  useEffect(() => {
    width > 768 ? setNumOfItems(5) : setNumOfItems(3);
  },[width])

  useEffect(() => {
    window.innerWidth > 768 ? setNumOfItems(5) : setNumOfItems(3);
  },[movies])

  if(!movies) return <div>Loading</div>
  const renderCarouselItems = () => {
    const items = [...movies].slice(activePage * numOfItems,(activePage * numOfItems) + numOfItems);
    return items.map((itm) => <CarouselItem key={itm.id} title={itm.title} id={itm.id} poster={itm.poster_path} />)
  }

  return(
    <Flex flexDirection={'column'} marginTop={12} gap={6}>
      <Heading width={{base: '90vw', sm: '80vw', lg: '70vw'}} marginX={'auto'} >
        {name}
      </Heading>
      <Center 
        overflowX={'hidden'} 
        marginX={'auto'} 
        gap={{base: 3}} 
        position={'relative'} 
        backgroundColor={'rgba(0,0,0,0.05)'}
        width={{base: '90vw', sm: '80vw', lg: '70vw'}}
      >
        {activePage > 0 && <CarouselBtnLeft setActivePage={setActivePage} />}
          {renderCarouselItems()}
        {activePage < (15/numOfItems) - 1 && <CarouselBtnRight setActivePage={setActivePage} />}
      </Center>
    </Flex>
  )
}

export default CarouselSlider;





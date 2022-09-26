import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Center } from '@chakra-ui/react';
import CarouselBtnLeft from './CarouselBtnLeft';
import CarouselBtnRight from './CarouselBtnRight';
import CarouselItem from './CarouselItem';

interface CarouselSliderProps {
  movies: number[],
}

const CarouselSlider = ({movies}: CarouselSliderProps) => {
  const { width } = useWindowSize();
  const [activePage, setActivePage] = useState<number>(0);
  const [numOfItems, setNumOfItems] = useState<number>(5) 

  useEffect(() => {
    window.innerWidth > 768 ? setNumOfItems(5) : setNumOfItems(3);
  },[])
  
  useEffect(() => {
    width > 768 ? setNumOfItems(5) : setNumOfItems(3);
  },[width])

  const handleCarouselMovement = (type: string) => {
    type === '+' ? setActivePage((activePage) => activePage + 1) : setActivePage((activePage) => activePage - 1)
  }

  const renderCarouselItems = () => {
    const items = [...movies].slice(activePage * numOfItems,(activePage * numOfItems) + numOfItems);
    return items.map((itm) => <CarouselItem key={itm} name={itm} />)
  }

  return(
    <Center 
      overflowX={'hidden'} 
      marginX={'auto'} 
      marginTop={12} 
      gap={{base: 3}} 
      position={'relative'} 
      backgroundColor={'rgba(0,0,0,0.05)'}
      width={{base: '80', sm: '80vw', md: 'container.md', lg: 'container.lg', xl: '8xl'}}
    >
      {activePage > 0 && <CarouselBtnLeft setActivePage={handleCarouselMovement} />}
        {renderCarouselItems()}
      {activePage < (15/numOfItems) - 1 && <CarouselBtnRight setActivePage={handleCarouselMovement} />}
    </Center>
  )
}

export default CarouselSlider;





import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import CarouselBtnLeft from './CarouselBtnLeft';
import CarouselBtnRight from './CarouselBtnRight';
import CarouselItem from './CarouselItem';

interface CarouselSliderProps {
  movies: number[],
}

const CarouselSlider = ({movies}: CarouselSliderProps) => {
  const [activePage, setActivePage] = useState<number>(0);
  
  const handleCarouselMovement = (type: string) => {
    type === '+' ? setActivePage((activePage) => activePage + 1) : setActivePage((activePage) => activePage - 1)
  }

  const renderCarouselItems = () => {
    const items = [...movies].splice(activePage * 5,activePage * 5 + 5);
    console.log(items)
    console.log(movies);
    return items.map((itm) => <CarouselItem key={itm} name={itm} />)
  }

  return(
    <Flex 
      overflowX={'hidden'} 
      marginX={'auto'} 
      marginTop={12} 
      gap={9} 
      position={'relative'} 
      backgroundColor={'rgba(0,0,0,0.05)'}
      maxWidth={'8xl'}
    >
      {activePage > 0 && <CarouselBtnLeft setActivePage={handleCarouselMovement} />}
        {renderCarouselItems()}
      {activePage < 2 && <CarouselBtnRight setActivePage={handleCarouselMovement} />}
    </Flex>
  )
}

export default CarouselSlider;





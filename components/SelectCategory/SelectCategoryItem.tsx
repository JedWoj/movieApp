import React from 'react';
import { Center } from '@chakra-ui/react';

interface SelectCategoryItemType {
    category: string,
    genreId: number
}

const SelectCategoryItem = ({category, genreId}: SelectCategoryItemType) => {
    return(
        <Center 
            onClick={() => console.log(genreId)}
            _hover={{
                backgroundColor: 'purple.600',
            }} 
            borderWidth={'thin'} 
            padding={'2.5'} 
            width={'28'} 
            cursor={'pointer'} 
            borderRadius={'full'} 
            borderColor={'white'}
            backgroundColor={'inherit'}
            transitionDuration={'300ms'}
            transitionProperty={'all'}
            transitionTimingFunction={'ease'}
        >
            {category}
        </Center>
    )
}

export default SelectCategoryItem;
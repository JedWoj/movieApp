import React from 'react';
import { Center } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../reduxHooks';
import filmsSlice from '../../store/slices/filmsSlice';

interface SelectCategoryItemType {
    category: string,
    genreId: number
}

const SelectCategoryItem = ({category, genreId}: SelectCategoryItemType) => {
    const dispatch = useAppDispatch();
    const activeGenre = useAppSelector((state) => state.films.activeGenre);

    const handleSelect = () => {
        dispatch(filmsSlice.actions.setActiveGenre(genreId));
        dispatch(filmsSlice.actions.changePage(1));
    }

    return(
        <Center 
            onClick={handleSelect}
            _hover={{
                backgroundColor: 'purple.600',
            }} 
            borderWidth={'thin'} 
            padding={'2.5'} 
            width={'28'} 
            cursor={'pointer'} 
            borderRadius={'full'} 
            borderColor={'white'}
            backgroundColor={`${activeGenre === genreId ? 'purple.700' : 'inherit'}`}
            transitionDuration={'300ms'}
            transitionProperty={'all'}
            transitionTimingFunction={'ease'}
        >
            {category}
        </Center>
    )
}

export default SelectCategoryItem;
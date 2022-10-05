import React from 'react';
import { Center } from '@chakra-ui/react';

interface SelectCategoryItemType {
    category: string,
    genreId: number
}

const SelectCategoryItem = ({category, genreId}: SelectCategoryItemType) => {
    return(
        <Center borderWidth={'thin'} padding={'2.5'} width={'28'} cursor={'pointer'} borderRadius={'full'} borderColor={'white'}>
            {category}
        </Center>
    )
}

export default SelectCategoryItem;
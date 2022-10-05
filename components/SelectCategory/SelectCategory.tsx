import React from 'react';
import { Flex } from '@chakra-ui/react';
import SelectCategoryItem from './SelectCategoryItem';
import { GenresType } from '../../types/genresType';

interface SelectCategoryType {
    genres: GenresType;
}

const SelectCategory = ({genres}: SelectCategoryType) => {
    console.log(genres, 1);
    const renderCategories = () => {
        const categories = genres.genres.map(gen => <SelectCategoryItem category={gen.name} genreId={gen.id} key={gen.id} />);
        return categories;
    }
    return(
        <Flex flexWrap={'wrap'} gap={'3'}>
            {renderCategories()}
        </Flex>
    )
}

export default SelectCategory;
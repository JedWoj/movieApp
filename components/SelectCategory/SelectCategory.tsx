import React from 'react';
import { Flex } from '@chakra-ui/react';
import SelectCategoryItem from './SelectCategoryItem';
import { GenresType } from '../../types/genresType';

interface SelectCategoryType {
    genres: GenresType;
}

const SelectCategory = ({genres}: SelectCategoryType) => {
    const renderCategories = () => {
        const categories = genres.genres.map(gen => <SelectCategoryItem category={gen.name === 'Science Fiction' ? 'SCI-FI' : gen.name} genreId={gen.id} key={gen.id} />);
        return categories;
    }

    return(
        <Flex justifyContent={'center'} flexWrap={'wrap'} gap={'3'}>
            {renderCategories()}
        </Flex>
    )
}

export default SelectCategory;
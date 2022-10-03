import React from 'react';
import { GridItem, Text, Box } from '@chakra-ui/react';
import { MovieCreditsCast, MovieCreditsCrew } from '../../types/movieCreditsType';
import { PersonRolesCastType } from '../../types/personRolesType';
import Link from 'next/link';
import Image from 'next/image';

// interface FilmsGridItemType {
//     person: MovieCreditsCast | MovieCreditsCrew
// }
interface FilmsGridItemType {
    person: PersonRolesCastType;
}

const FilmsGridItem = ({person}: FilmsGridItemType) => {
    const isCast = (person: MovieCreditsCast | MovieCreditsCrew): person is MovieCreditsCast => {
        return (person as MovieCreditsCast).character !== undefined;
    }

    return(
        <GridItem cursor={'pointer'}>
            <Link href={`/films/${person.id}`}>
                <Box>
                    <Image src={person.poster_path ? `https://image.tmdb.org/t/p/w500/${person.poster_path}` : '/../public/images/unknown.png'} alt={person.character} width={'5000'} height={'7000'} />
                    <Text fontWeight={'bold'}>
                        {person.title}
                    </Text>
                    <Text marginTop={'3'}>
                        {/* {isCast(person) ? person.character : person.job} */}
                        {person.character}
                    </Text>
                </Box>
            </Link> 
        </GridItem>
    )
}

export default FilmsGridItem;
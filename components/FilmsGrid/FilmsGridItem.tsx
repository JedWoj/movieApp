import React from 'react';
import { GridItem, Text, Box } from '@chakra-ui/react';
import { MovieCreditsCast, MovieCreditsCrew } from '../../types/movieCreditsType';
import { PersonRolesCastType, PersonRolesCrewType } from '../../types/personRolesType';
import Link from 'next/link';
import Image from 'next/image';

interface FilmsGridItemType {
    person: PersonRolesCastType | PersonRolesCrewType;
}

const FilmsGridItem = ({person}: FilmsGridItemType) => {
    const isCast = (person: PersonRolesCastType | PersonRolesCrewType): person is PersonRolesCastType => {
        return (person as PersonRolesCastType).character !== undefined;
    }

    return(
        <GridItem cursor={'pointer'}>
            <Link href={`/films/${person.id}`}>
                <Box>
                    <Image src={person.poster_path ? `https://image.tmdb.org/t/p/w500/${person.poster_path}` : '/../public/images/unknown.png'} alt={person.title} width={'5000'} height={'7000'} />
                    <Text fontWeight={'bold'}>
                        {person.title}
                    </Text>
                    <Text marginTop={'3'}>
                        {isCast(person) ? person.character : person.job}
                    </Text>
                </Box>
            </Link> 
        </GridItem>
    )
}

export default FilmsGridItem;
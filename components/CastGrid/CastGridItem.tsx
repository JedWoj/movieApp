import React from 'react';
import { GridItem, Text, Box } from '@chakra-ui/react';
import { MovieCreditsCast, MovieCreditsCrew } from '../../types/movieCreditsType';
import Link from 'next/link';
import Image from 'next/image';

interface CastGridItemType {
    person: MovieCreditsCast | MovieCreditsCrew
}

const CastGridItem = ({person}: CastGridItemType) => {
    const isCast = (person: MovieCreditsCast | MovieCreditsCrew): person is MovieCreditsCast => {
        return (person as MovieCreditsCast).character !== undefined;
    }


    return(
        <GridItem cursor={'pointer'}>
            <Link href={`/persons/${person.id}`}>
                <Box>
                    <Image src={person.profile_path ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : '/../public/images/unknown.png'} alt={person.name} width={'5000'} height={'7000'} />
                    <Text fontWeight={'bold'}>
                        {person.name}
                    </Text>
                    <Text marginTop={'3'}>
                        {isCast(person) ? person.character : person.job}
                    </Text>
                </Box>
            </Link> 
        </GridItem>
    )
}

export default CastGridItem;
import { ListItem, Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { SingleGenreMovie } from '../../types/genreMovies';
import Card from '../UI/Card'; 

interface FilmsListItemType {
    film: SingleGenreMovie,
}

const FilmsListItem = ({film}: FilmsListItemType) => {
    return(
        <Link href={`films/${film.id}`}>
            <ListItem>
                <Card>
                    <Flex>
                        <Box flexBasis={'100'}>
                            <Image src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={`poster of ${film.title}`} width={'80'} height={'100'} />
                        </Box>
                        <Heading fontSize={{base: 'md', sm: 'lg', xl: '2xl'}}>
                            {film.title}
                        </Heading>
                    </Flex>
                </Card>
            </ListItem>
        </Link>)
}

export default FilmsListItem;
import { ListItem, Box, Flex, Heading } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
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
            <ListItem cursor={'pointer'}>
                <Card>
                    <Flex>
                        <Box flexBasis={'100'}>
                            <Image src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={`poster of ${film.title}`} width={'80'} height={'100'} />
                        </Box>
                        <Flex gap={'2'} alignItems={'flex-start'} flexDirection={'column'}>
                            <Heading fontSize={{base: 'md', sm: 'lg', xl: '2xl'}}>
                                {film.title}
                            </Heading>
                            <Box>
                                released: {film.release_date}
                            </Box>
                            <Flex fontWeight={'bold'} alignItems={'center'}>
                                {film.vote_average}/10
                                <StarIcon marginLeft={'1'} color={'yellow.400'} />
                            </Flex>
                        </Flex>
                    </Flex>
                </Card>
            </ListItem>
        </Link>)
}

export default FilmsListItem;
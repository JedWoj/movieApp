import { ListItem, Box } from '@chakra-ui/react';
import { SingleGenreMovie } from '../../types/genreMovies';
import Card from '../UI/Card';

interface FilmsListItemType {
    film: SingleGenreMovie,
}

const FilmsListItem = ({film}: FilmsListItemType) => {
    return(
        <ListItem>
            <Card>
                <Box>
                    {film.overview}
                </Box>
            </Card>
        </ListItem>)
}

export default FilmsListItem;
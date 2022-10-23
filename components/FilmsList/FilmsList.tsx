import { OrderedList, ListItem } from '@chakra-ui/react';
import { SingleGenreMovie, GenreMovies } from '../../types/genreMovies';

interface FilmsListType {
    films?: GenreMovies;
}

const FilmsList = ({films}: FilmsListType) => {
    const renderFilmsList = () => {
        const items = films?.results.map(itm => <ListItem key={itm.id}>{itm.title}</ListItem>);
        return items;
    }
    
    return(
        <OrderedList>
            {renderFilmsList()}
        </OrderedList>
    )
}

export default FilmsList;
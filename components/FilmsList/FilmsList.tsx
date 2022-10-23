import { OrderedList } from '@chakra-ui/react';
import { GenreMovies } from '../../types/genreMovies';
import FilmsListItem from './FilmsListItem';

interface FilmsListType {
    films?: GenreMovies;
}

const FilmsList = ({films}: FilmsListType) => {
    const renderFilmsList = () => {
        const items = films?.results.map(itm => <FilmsListItem key={itm.id} film={itm} />);
        return items;
    }
    
    return(
        <OrderedList marginTop={'14'}>
            {renderFilmsList()}
        </OrderedList>
    )
}

export default FilmsList;
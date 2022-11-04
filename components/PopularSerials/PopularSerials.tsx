import { Grid, Heading } from '@chakra-ui/react';
import { PopularSerialsType } from '../../types/popularSerialsType';
import PopularSerial from '../PopularSerials/PopularSerial';

interface PopularSerialsPropsType {
    serials: PopularSerialsType, 
}

const PopularSerials = ({serials}: PopularSerialsPropsType) => {
    const renderList = () => {
        const popular = serials.results.slice(0,10).map((ser,idx) => <PopularSerial serial={ser} idx={idx + 1} key={ser.id}/>);
        return popular;
    }

    return(
        <>
            <Heading as={'h2'} size={'lg'} textAlign={'center'} marginBottom={'8'}>
                The Most Popular Serials
            </Heading>
            <Grid paddingBottom={8} templateColumns={'repeat(auto-fill, minmax(177px, 1fr))'} gap={4}>
                {renderList()}
            </Grid>
        </>
    )
}

export default PopularSerials;
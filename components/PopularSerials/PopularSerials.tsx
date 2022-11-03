import { PopularSerialsType } from '../../types/popularSerialsType';

interface PopularSerialsPropsType {
    serials: PopularSerialsType, 
}

const PopularSerials = ({serials}: PopularSerialsPropsType) => {
    console.log(serials);
    
    return(
        <div>
            Popular Serials
        </div>
    )
}

export default PopularSerials;
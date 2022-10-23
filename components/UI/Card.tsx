import { Box } from "@chakra-ui/react";

interface CardType {
    children: JSX.Element | JSX.Element[],
}

const Card = ({children}: CardType) => {
    return(
        <Box bgGradient={'linear(to-tr, #ff335d, #3f5efb)'} padding={'5'} borderRadius={'2xl'} boxShadow={'dark-lg'} marginY={'10'}>
            {children}
        </Box>
    )
}

export default Card;
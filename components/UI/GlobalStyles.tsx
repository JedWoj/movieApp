import React from 'react';
import { Box } from '@chakra-ui/react';

interface BackgroundColorType {
    children: JSX.Element[] | JSX.Element;
}

const GlobalStyles = ({children}: BackgroundColorType) => {
    return(
        <Box minHeight={'container.sm'} color={'whiteAlpha.900'} bgGradient="radial(#ff335d, #3f5efb)">
            {children}
        </Box>
    )
}

export default GlobalStyles;
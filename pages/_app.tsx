import type { AppProps } from 'next/app';
import Nav from '../components/Nav/Nav';
import BackgroundColor from '../components/UI/GlobalStyles';
import { ChakraProvider } from '@chakra-ui/react'; 
import { Provider } from 'react-redux';
import store from '../store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <ChakraProvider>
      <Provider store={store}>
        <BackgroundColor>
          <Nav />
          <Component {...pageProps} />
        </BackgroundColor>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp

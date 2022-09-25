import type { AppProps } from 'next/app';
import Nav from '../components/Nav/Nav';
import BackgroundColor from '../components/UI/GlobalStyles';
import { ChakraProvider } from '@chakra-ui/react'; 
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tmdb.apps.quintero.io/',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <ApolloProvider client={client}>
        <BackgroundColor>
          <Nav />
          <Component {...pageProps} />
        </BackgroundColor>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp

import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { createContext } from 'react';
import './styles.css';
import { Hero } from '@todo-starter/shared/ui';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import client from '../apollo';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <header>
          <Hero />
        </header>
        <main className="flex-grow pt-16 ">
          <Component {...pageProps} />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default CustomApp;

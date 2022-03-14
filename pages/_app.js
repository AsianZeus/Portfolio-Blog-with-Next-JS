import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import ParticleBackground from '../particles/ParticleBackground';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ParticleBackground />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

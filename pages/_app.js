import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import ParticleBackground from '../particles/ParticleBackground';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ParticleBackground />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;

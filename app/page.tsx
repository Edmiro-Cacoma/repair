import Header from './components/header/Header'
import Head from 'next/head';


import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Home() {
  return (
    <main >

      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <Header />
    </main>
  );
}

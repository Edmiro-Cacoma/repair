import Header from './components/header/Header'
import Head from 'next/head';


import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Hero from './components/hero/Hero';
import Facts from './components/facts/Facts';
import About from './components/about/About';
import Services from './components/services/Services';
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <Facts />
        <About />
        <Services/>
      </main></>

  );
}

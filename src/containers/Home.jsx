import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Search from '../components/Search';
import Banner from '../components/Banner';
import Distribution from '../components/Distribution';
import Panel from '../components/Panel';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const Home = () => {
  return (
    <>
      <Header>
        <Navigation >
          <Search />
        </Navigation>
      </Header>
      <Banner />
      <Distribution>
      <Navigation />
        <Panel />
      </Distribution>

      <Footer />
    </>
  );
};
export default Home;

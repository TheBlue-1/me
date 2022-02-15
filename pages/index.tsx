import React from 'react';

import Footer from './components/footer';
import AboutMe from './components/info/about-me';
import Profiles from './components/info/profiles';
import Separator1 from './components/separator/separator1';
import Top from './components/top';
import styles from '/styles/home.module.css';

import type { NextPage } from "next";
const Home: NextPage = () => {
  React.useEffect(() => {
    const loadingScrollBehavior = import("custom-scroll-behaviors");
    loadingScrollBehavior.then((scrollBehavior) => {
      scrollBehavior.scrollElementsConfig.autoSizePage = true;
      scrollBehavior.scrollHandler.init();
    });
  }, []);
  return (
    <div className={styles.siteWrapper}>
      <Top></Top>
      <AboutMe></AboutMe>
      <Separator1></Separator1>
      <Profiles></Profiles>
      <Footer></Footer>
    </div>
  );
};

export default Home;

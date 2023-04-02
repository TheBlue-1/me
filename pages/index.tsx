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
const moveScroll=  React.useCallback((e:React.MouseEvent<HTMLDivElement>)=>{
const movement=e.movementY*3;
const pressed= e.buttons  & 1;
pressed&&window.scroll({top:window.scrollY-movement})
},[]);
  return (
    <div className={styles.siteWrapper}>
      <Top></Top>
      <AboutMe></AboutMe>
      <Separator1></Separator1>
      <Profiles></Profiles>
      <Footer></Footer>
      <div onMouseMove={moveScroll} className={styles.scrollBar}>
        <vertical-scroll-behavior on start="0" end-pos="-1" repeat="continue" start-pos="0" speed="-0.33"></vertical-scroll-behavior>
      </div>
    </div>
  );
};

export default Home;

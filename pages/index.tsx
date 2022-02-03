import AboutMe from './components/info/about-me';
import Profiles from './components/info/profiles';
import Projects from './components/info/projects';
import Top from './components/top';

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
   <div >
     
        <Top></Top>
        <div id="inbetweenPage1"></div>
       <AboutMe></AboutMe>
        <Profiles></Profiles>
       <Projects></Projects>
      
      <footer>
        <p>©2019</p>
      </footer>
  
   </div>
  )
}

export default Home

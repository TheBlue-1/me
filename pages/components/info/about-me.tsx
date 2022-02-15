import { NextPage } from 'next';
import Image from 'next/image';

import portraitPic from '../../../public/img/portrait.svg';

const AboutMe: NextPage = () => {
  return (
    <div className={["page", "scrollElement"].join(" ")}>
      <vertical-scroll-behavior start="200vh" end-pos="-100vh" start-pos="0" speed="-0.6"></vertical-scroll-behavior>
      <div>
        <Image src={portraitPic} alt="" layout="fill" objectFit="contain" objectPosition="left" />
      </div>
      <div>
        <h2>About Me</h2>
        <ul>
          <li>Austria, 11.02.2001</li>
          <li>Software Developer</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default AboutMe;

import { NextPage } from 'next';
import Image from 'next/image';

import avatar from '/public/img/avatar.svg';
import styles from '/styles/separator/separator1.module.css';

const Separator1: NextPage = () => {
  return (
    <div>
      <div className={["scrollElement", "separator", styles.separator].join(" ")}>
        <vertical-scroll-behavior start="200vh" end="366.67vh" start-pos="100vh" speed="-3"></vertical-scroll-behavior>
      </div>
      <div className={styles.flyingImage}>
        <Image src={avatar} alt="avatar" />
        <horizontal-scroll-behavior start="216.67vh" end-pos="100vw" start-pos="-10vh" end="266.67vh"></horizontal-scroll-behavior>
      </div>
    </div>
  );
};
export default Separator1;

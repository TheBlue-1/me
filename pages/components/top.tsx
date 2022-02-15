import { NextPage } from 'next';

import styles from '/styles/top.module.css';

const Top: NextPage = () => {
  return (
    <div id={styles.topParent}>
      <div className={[styles.top, "scrollElement"].join(" ")}>
        <vertical-scroll-behavior start="66.67vh" end="200vh" start-pos="0" speed="-0.5"></vertical-scroll-behavior>
        <noscript>
          <h2>Please enable javascript to use this site</h2>
        </noscript>
      </div>
      <div className={[styles.top, styles.top2, "scrollElement"].join(" ")}>
        <vertical-scroll-behavior start="66.67vh" end="200vh" start-pos="0" speed="1"></vertical-scroll-behavior>
      </div>
      <div className={[styles.header, "scrollElement"].join(" ")}>
        <vertical-scroll-behavior start="0" end="66.67vh" start-pos="0" speed="-1"></vertical-scroll-behavior>
        <visibility-scroll-behavior start="0" end="66.67vh" start-opacity="1" end-opacity="0"></visibility-scroll-behavior>
        <div id="headerText">
          <h1>
            Maximilian <br />
            Mayrhofer
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Top;

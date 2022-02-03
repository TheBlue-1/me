import { NextPage } from 'next';

import styles from '/styles/top.module.css';

const Top:NextPage=()=>{
return (<div id={styles.topParent}>
<div className={styles.top}>
  <noscript
    ><h2 >
      Please enable javascript to use this site
    </h2></noscript
  >
</div>
<div className={styles.top}></div>
<div  id={styles.header}>
  <div id="headerText">
    <h1 >
      Maximilian <br/>
      Mayrhofer
    </h1>
  </div>

</div></div>)
}
export default Top;

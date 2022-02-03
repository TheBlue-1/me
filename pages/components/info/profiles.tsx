import { NextPage } from 'next';

const Profiles:NextPage=()=>{
return (<div id="infoPage1" >
<img src="/img/profile.jpg" alt="" />
<div>
  <h2>Profiles</h2>
  <ul>
    <li>
      <a href="mailto:maximilian.mayrhofer@outlook.at"
        >maximilian.mayrhofer@outlook.at</a
      >
    </li>
    <li>
      <a href="https://github.com/TheBlue-1">GitHub - TheBlue-1</a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/maximilian-m-73b25b180/"
        >LinkedIn</a
      >
    </li> <li>
      <a href="https://www.xing.com/profile/Maximilian_Mayrhofer6"
        >XING</a
      >
    </li>
    <li>
      <a href="https://stackoverflow.com/users/11430878/theblueone"
        >Stack Overflow</a
      >
    </li>
  </ul>
</div>
</div>)
}
export default Profiles;

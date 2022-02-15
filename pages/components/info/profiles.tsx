import { NextPage } from 'next';

import styles from '/styles/info/profiles.module.css';

const Profiles: NextPage = () => {
  return (
    <div className={["page", "scrollElement", styles.page].join(" ")}>
      <vertical-scroll-behavior start="266.67vh" end-pos="-100vh" start-pos="100vh" speed="-1"></vertical-scroll-behavior>
      <div>
        <h2>Profiles</h2>
        <ul>
          <li>
            <a href="https://github.com/TheBlue-1">GitHub</a>
          </li>
          <li>
            <a href="https://discordapp.com/users/406118105711116288">Discord</a>,{" "}
            <a href="https://discord.com/invite/dkCPEmr8eb">Server</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/maximilian-m-73b25b180/">LinkedIn</a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/11430878/theblueone">Stack Overflow</a>
          </li>
          <li>
            <a href="mailto:maximilian.mayrhofer@outlook.at">Email</a>
          </li>
        </ul>
      </div>

      <div>
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://kudos.ml">Kudos</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/custom-scroll-behaviors">custom-scroll-behaviors-js</a>
          </li>
          <li>
            <a href="https://jptr.ml">Jupiter - Die WebUntis Alternative</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Profiles;

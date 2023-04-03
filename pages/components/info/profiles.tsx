import { NextPage } from "next";
import Github from "../reused/github";

import styles from "/styles/info/profiles.module.css";

const Profiles: NextPage = () => {
  return (
    <div className={["page", "scrollElement", styles.page].join(" ")}>
      <vertical-scroll-behavior
        start="266.67vh"
        end="366.67vh+self"
        start-pos="100vh"
        speed="-1"
      ></vertical-scroll-behavior>
      <div>
        <h2>Profiles</h2>
        <ul>
          <li>
            <a href="https://github.com/TheBlue-1">GitHub</a>
          </li>
          <li>
            <a href="https://discordapp.com/users/406118105711116288">
              Discord
            </a>
            , <a href="https://discord.com/invite/dkCPEmr8eb">Server</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/maximilian-mayrhofer/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/11430878/theblueone">
              Stack Overflow
            </a>
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
            <h3>
              <a href="https://kudos.theblueone.dev">Kudos</a>
            </h3>
            A discord bot with an honor economy and many custom features.
            Started to port from c# to ts for a better library.
            <br />
            [paused, but maintained]
            <Github href="https://github.com/TheBlue-1/kudos" />
          </li>
          <li>
            <h3>
              <a href="https://www.npmjs.com/package/custom-scroll-behaviors">
                custom-scroll-behaviors-js
              </a>
            </h3>
            A library for scroll events on webpages. Also used for this site.
            Has plans for next versions. <br />
            [paused]
            <Github href="https://github.com/TheBlue-1/custom-scroll-behaviors-js" />
          </li>
          <li>
            <h3>
              <a href="#">My Web Page</a>
            </h3>
            You are currently on it. Presence to the world. Testing space for my
            libraries or ideas. <br />
            [rarely updated]
            <Github href="https://github.com/TheBlue-1/me" />
          </li>
          <li>
            <h3>
              <a>Jupiter - Die WebUntis Alternative (offline)</a>
            </h3>
            An interface for WebUntis that supported features like Untis and
            more (free rooms, notifications for changes). Discontinued since
            I&apos;m no longer in school. If you have interest in it you can
            text me (needs maintenance, is free to host).
            <br />
            [discontinued]
            <Github href="https://github.com/TheBlue-1/jupiter" />
          </li>
          <li>
            <h3>
              <a>Trading Bot</a>
            </h3>
            A Bot trading on capital.com.
            <br />
            [in progress]
          </li>
          <li>
            <h3> Less interesting: </h3>
            <ul>
              discord-js based library in NestJs style <br />
              bot based on this library <br />
              youtube player and downloader
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Profiles;

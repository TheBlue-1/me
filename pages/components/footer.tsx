import { NextPage } from "next";

import styles from "/styles/footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={["page", styles.footer].join(" ")}>
      <h2>Friends Pages:</h2>
      <ul>
        <li>
          Wendelin Muth: <a href="https://wendelin-muth.cf">wendelin-muth.cf</a>
        </li>
      </ul>
      <p className={styles.footerText}>©2023</p>
    </footer>
  );
};
export default Footer;

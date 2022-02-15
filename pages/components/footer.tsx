import { NextPage } from 'next';

import styles from '/styles/footer.module.css';

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>@2022</p>
    </footer>
  );
};
export default Footer;

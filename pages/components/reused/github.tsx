import Image from "next/image";
import githubLogo from "../../../public/img/github.svg";
import styles from "/styles/components/github.module.css";

const Github = ({ href }: { href: string }) => {
  return (
    <>
      {" "}
      <a href={href} className={styles.link}>
        <Image width="22px" height="22px" src={githubLogo} alt="GitHub" />
      </a>
    </>
  );
};
export default Github;

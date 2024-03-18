import styles from "./Header.module.css"
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar />
      <Intro />
    </div>
  );
};

export default Header;

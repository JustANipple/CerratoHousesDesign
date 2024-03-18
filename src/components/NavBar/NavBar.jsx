import { useState } from "react";
import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const listItems = [
    "Home",
    "Location",
    "Project",
    "Newspaper",
    "Contacts",
    "Blog",
    "Story",
    "Booking",
    "About",
  ];

  function handleButtonClick() {
    if (menu) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setMenu(!menu);
  }

  return (
    <div className={`${styles.navBar} ${menu ? styles.navBar_modal_open : ""}`}>
      <img
        src="/CH_logo.svg"
        alt="Cerrato logo"
        className={styles.navBar_logo}
      />
      <button
        className={`${styles.navBar_button_hamburger} ${
          menu ? styles.navBar_button_close : ""
        }`}
        onClick={handleButtonClick}
      >
        {menu ? <IoClose /> : <GiHamburgerMenu />}
      </button>
      <div
        className={`${styles.navMenu} ${menu ? styles.navMenu_open : ""}`}
        onClick={handleButtonClick}
      >
        <div className={styles.content_header}>
          <img
            src="/CH_logo.svg"
            alt="Cerrato logo"
            className={styles.header_logo}
          />
          <p className={styles.header_title}>Cerrato Houses</p>
        </div>
        <hr className={styles.content_divisor} />
        <ul className={styles.navMenu_list}>
          {listItems.map((item, index) => {
            return (
              <a href="#" key={index} className={styles.list_item}>
                <li>{item}</li>
              </a>
            );
          })}
        </ul>
        {/* <hr className={styles.content_divisor_footer} />
        <button className={styles.content_button}>Book Now!</button> */}
      </div>
    </div>
  );
};

export default NavBar;

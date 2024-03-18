import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";

const Footer = () => {
  const externalLinks = [
    "Subscriptions",
    "About Us",
    "Contact Us",
    "FAQ and more",
    "Privacy Policy",
    "Terms of Service",
    "Shipping Policy",
    "Refunds & Returns",
    "Find Us At",
    "Wholesale",
    "Ambassador Program",
  ];

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_top}>
          <div className={styles.top_logo}>
            <img
              src="/CH_logo.svg"
              alt="cerrato houses logo"
              className={styles.logo_img}
            />
            <p className={styles.top_logo_name}>Cerrato Houses</p>
          </div>
          <div className={styles.top_social}>
            <a href="#" className={styles.social_icon}>
              <FaInstagram />
            </a>
            <a href="#" className={styles.social_icon}>
              <FaFacebook />
            </a>
            <a href="#" className={styles.social_icon}>
              <FaTelegramPlane />
            </a>
            <a href="#" className={styles.social_icon}>
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className={styles.footer_center}>
          <p className={styles.center_list_title}>Useful Links</p>
          <ul className={styles.center_links}>
            {externalLinks.map((link, index) => {
              return (
                <li key={index} className={styles.links_item}>
                  <a href="#">{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.footer_bottom}>
          <p className={styles.bottom_title}>Newsletter</p>
          <p className={styles.bottom_description}>
            Sign up for exclusive offers and news
          </p>
          <div className={styles.bottom_email}>
            <input
              type="email"
              placeholder="Enter email"
              className={styles.email_input}
            />
            <button className={styles.email_button}>
              <MdArrowRightAlt />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

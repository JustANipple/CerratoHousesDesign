import styles from "./Service.module.css";
import { IoWalletOutline } from "react-icons/io5";
import { BiCoinStack } from "react-icons/bi";
import { LuFileSignature } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import PropTypes from "prop-types";

const Service = () => {
  const utilities = [
    {
      icon: <IoWalletOutline />,
      title: "Find Out How Much You Can Afford",
      desc: "We'll help you estimate your budget range. Save to your buyer profile to help in your search.",
      page: "#"
    },
    {
      icon: <BiCoinStack />,
      title: "Understand Your Monthly Costs",
      desc: "Get an in-depth look at what your monthly and closing costs will look like based on your financial situation and goals.",
      page: "#"
    },
    {
      icon: <LuFileSignature />,
      title: "Get Help With Your Down Payment",
      desc: "You may be able to buy a home with just 3.5% down. Saving for that can be challenging.",
      page: "#"
    },
  ];

  return (
    <div className={styles.service}>
      <div className={styles.service_title}>Discover How We Can Help You</div>
      <div className={styles.utilities}>
        {utilities.map( (utility, index) => {
          return <Utility utility={utility} key={index}/>
        })}
      </div>
    </div>
  );
};

const Utility = ({ utility, index }) => {
  return (
    <div key={index} className={styles.utility}>
      <span className={styles.utility_icon}>{utility.icon}</span>
      <div className={styles.utility_content}>
        <p className={styles.utility_title}>{utility.title}</p>
        <p className={styles.utility_description}>{utility.desc}</p>
      </div>
      <a className={styles.utility_redirect} href={utility.page}>
        <HiOutlineArrowNarrowRight />
      </a>
    </div>
  );
};

Utility.propTypes = {
  utility: PropTypes.shape({
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
  }).isRequired,
};

export default Service;

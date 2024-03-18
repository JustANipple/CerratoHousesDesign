import styles from "./Homes.module.css";
import Housing from "../Housing/Housing";
import { FaBath } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { FaSwimmingPool } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";
import { MdLocalParking } from "react-icons/md";
import { MdLandscape } from "react-icons/md";
import { RiChargingPile2Fill } from "react-icons/ri";
import { FaVolumeMute } from "react-icons/fa";
import { IoBed } from "react-icons/io5";

const Homes = () => {

    const houseOne = {
        gallery: [
          "src/assets/guarene/IMGP4610.JPG",
          "src/assets/guarene/IMGP5106.JPG",
          "src/assets/guarene/IMGP5095.JPG",
          "src/assets/guarene/IMGP5056.JPG",
        ],
        map: "https://maps.app.goo.gl/HnsA2K1rzCXQ5nLc7",
        title: "Casa di Guarene",
        address: "Guarene, 12050, CN, Italy",
        facilities: [
          { icon: <IoBed />, type: "BedRoom", value: 5 },
          { icon: <FaBath />, type: "BathRoom", value: 2 },
          { icon: <FaWifi />, type: "Wi-Fi", value: 1 },
          { icon: <TbAirConditioning />, type: "Air Conditioning", value: 1 },
          { icon: <FaSwimmingPool />, type: "Swimming pool", value: 1 },
          { icon: <GiHighGrass />, type: "Garden", value: 1 },
          { icon: <MdLocalParking />, type: "Parking", value: 1 },
          { icon: <MdLandscape />, type: "LandScape", value: 1 },
          { icon: <RiChargingPile2Fill />, type: "Electric charging", value: 1 },
          { icon: <FaVolumeMute />, type: "Soundproofing", value: 1 },
        ],
        description:
          "Simple house with modern architecture and cool interiors located in the city center making easier for you to access all over the city. Nullam mollisss eros leo, eu posuere enim tempor vitae. Phasellus at lacus tristique, tristique elit id, tempor eros. Integer sit amet fringilla lorem. Pellentesque lacus sapien, hendrerit ac odio nec, auctor volutpat libero. Ut vitae quam consequat, sodales orci sit amet, eleifend erat.",
        coordinates: { x: 44.73807, y: 8.028289 },
        priceRange: { min: 100, max: 200 },
        booking: "https://www.booking.com/Share-k7HGD0",
      };
    
      const houseTwo = {
        gallery: [
          "src/assets/guarene/IMGP5146.JPG",
          "src/assets/guarene/IMGP5105.JPG",
          "src/assets/guarene/IMGP5095.JPG",
          "src/assets/guarene/IMGP5042.JPG",
        ],
        map: "https://maps.app.goo.gl/HnsA2K1rzCXQ5nLc7",
        title: "Black Modern House",
        address: "New York Street 1260",
        facilities: [
          { icon: <IoBed />, type: "BedRoom", value: 5 },
          { icon: <FaBath />, type: "BathRoom", value: 2 },
          { icon: <FaWifi />, type: "Wi-Fi", value: 1 },
          { icon: <TbAirConditioning />, type: "Air Conditioning", value: 1 },
          { icon: <FaSwimmingPool />, type: "Swimming pool", value: 1 },
          { icon: <GiHighGrass />, type: "Garden", value: 1 },
          { icon: <MdLocalParking />, type: "Parking", value: 1 },
          { icon: <MdLandscape />, type: "LandScape", value: 1 },
          { icon: <RiChargingPile2Fill />, type: "Electric charging", value: 1 },
          { icon: <FaVolumeMute />, type: "Soundproofing", value: 1 },
        ],
        description:
          "Simple house with modern architecture and cool interiors located in the city center making easier for you to access all over the city. Nullam mollisss eros leo, eu posuere enim tempor vitae. Phasellus at lacus tristique, tristique elit id, tempor eros. Integer sit amet fringilla lorem. Pellentesque lacus sapien, hendrerit ac odio nec, auctor volutpat libero. Ut vitae quam consequat, sodales orci sit amet, eleifend erat.",
        coordinates: { x: 44.73807, y: 8.028289 },
        priceRange: { min: 100, max: 200 },
        booking: "https://www.booking.com/Share-k7HGD0",
      };

  return (
    <section className={styles.homes}>
        <p className={styles.homes_title}>Check out our housings</p>
      <Housing house={houseOne} />
      <Housing house={houseTwo} />
    </section>
  );
};

export default Homes;

import styles from "./Housing.module.css";
import { IoIosPin } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GrNext } from "react-icons/gr";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const Housing = ({ house }) => {
  const [modal, setModal] = useState(false);

  function handleClick() {
    setModal(!modal);
  }

  return (
    <>
      <div
        className={styles.housing}
        style={{ backgroundImage: `url(${house.gallery[0]})` }}
      >
        <a href={house.map} target="_blank" className={styles.housing_map}>
          <span className={styles.map_icon}>
            <IoIosPin />
          </span>
          Maps
        </a>
        <div className={styles.housing_content}>
          <div className={styles.content_text}>
            <p className={styles.text_title}>{house.title}</p>
            <p className={styles.text_description}>{house.address}</p>
          </div>
          <span className={styles.content_icon} onClick={handleClick}>
            <div className={styles.icon}>
              <GrNext />
            </div>
          </span>
        </div>
      </div>
      <Modal house={house} modal={modal} setModal={setModal} />
    </>
  );
};

Housing.propTypes = {
  house: PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    map: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    facilities: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.object.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ),
    description: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
    priceRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }),
    booking: PropTypes.string.isRequired,
  }).isRequired,
};

const Modal = ({ house, modal, setModal }) => {
  const [image, setImage] = useState(0);
  const [more, setMore] = useState(false);

  function handleBackClick() {
    setModal(!modal);
  }

  function handlePictureClick(index) {
    setImage(index);
  }

  function handleMoreClick() {
    setMore(!more);
  }

  return (
    <div className={`${styles.modal} ${modal ? styles.modal_open : ""}`}>
      <div
        className={styles.modal_header}
        style={{ backgroundImage: `url( ${house.gallery[image]})` }}
      >
        <div className={styles.header_actions} onClick={handleBackClick}>
          <IoIosArrowBack />
        </div>
        <div className={styles.header_content}>
          <div className={styles.content_text}>
            <p className={styles.text_title}>{house.title}</p>
            <p className={styles.text_description}>{house.address}</p>
          </div>
          <ul className={styles.content_gallery}>
            {house.gallery.map((img, index) => {
              return (
                <li
                  key={index}
                  className={styles.gallery_img}
                  style={{ backgroundImage: `url(${img})` }}
                  onClick={() => handlePictureClick(index)}
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.modal_body}>
        <p className={styles.body_title}>Description</p>
        <div className={styles.body_facilities}>
          {house.facilities.map((facility, index) => {
            return (
              <div key={index} className={styles.facility}>
                <span className={styles.facility_icon}>{facility.icon}</span>
                <div className={styles.facility_info}>
                  <p className={styles.info_type}>{facility.type}</p>
                  <p className={styles.info_value}>
                    {facility.type.includes("Room") ? (
                      facility.value + " Rooms"
                    ) : (
                      <FaCheck color="#56d18b" />
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p
          className={`${styles.body_description} ${
            more ? styles.body_description_more : ""
          }`}
        >
          {house.description}
          <span
            onClick={handleMoreClick}
            className={`${styles.description_more} ${
              more ? styles.description_less : ""
            }`}
          >
            {!more ? "Read More..." : "Show Less"}
          </span>
        </p>
        <MapContainer
          style={{ height: "180px", borderRadius: "1rem" }}
          center={[house.coordinates.x, house.coordinates.y]}
          zoom={16}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <CircleMarker
            center={[house.coordinates.x, house.coordinates.y]}
            radius={30}
            color="#43bce2"
            weight={2}
          >
            <Popup>Cerrato Houses</Popup>
          </CircleMarker>
        </MapContainer>
      </div>
      <div className={styles.modal_footer}>
        <div className={styles.footer_price}>
          <p className={styles.price_label}>Price range</p>
          <p className={styles.price_value}>
            €{house.priceRange.min}-{house.priceRange.max}
            <span className={styles.value_interval}>/Day</span>
          </p>
        </div>
        <a
          href={house.booking}
          className={styles.footer_button}
          target="_blank"
        >
          Rent Now
        </a>
      </div>
    </div>
  );
};

Modal.propTypes = {
  house: PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    map: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    facilities: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.object.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ),
    description: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
    priceRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }),
    booking: PropTypes.string.isRequired,
  }).isRequired,
};

export default Housing;

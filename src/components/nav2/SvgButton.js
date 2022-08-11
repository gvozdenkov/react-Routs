import React from "react";
import PropTypes from "prop-types";
import "./SvgButton.css";
import defaultButtonImg from "../../images/arrow-right-thin.svg";

function SvgButton({ img, size, rotation, onClick, disable }) {
  const styles = {
    background: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: SvgButton.sizes[size],
    height: SvgButton.sizes[size],
    transform: `rotate(${rotation}deg)`,
  };
  return (
    <button
      className={`svg-button ${disable ? "svg-button_disabled" : ""}`}
      style={styles}
      onClick={onClick}
    ></button>
  );
}

SvgButton.propTypes = {
  img: PropTypes.string,
  rotation: PropTypes.number,
  size: PropTypes.oneOf(["small", "normal", "large"]),
  disable: PropTypes.bool,
};

SvgButton.defaultProps = {
  img: defaultButtonImg,
  size: "normal",
  rotation: 0,
  onClick: "",
  disabled: "",
};

SvgButton.sizes = {
  small: "20px",
  normal: "30px",
  large: "40px",
};

export default SvgButton;

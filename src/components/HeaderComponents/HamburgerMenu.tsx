import IconClose from "@assets/icon-close.svg";
import IconHamburger from "@assets/icon-hamburger.svg";
import { StrictMode, useState } from "react";
import Menu from "./Menu";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImg] = useState(IconHamburger.src);

  const handleClick = () => {
    setIsOpen(!isOpen);
    imgSrc == IconHamburger.src
      ? setImg(IconClose.src)
      : setImg(IconHamburger.src);
  };

  return (
    <StrictMode>
      <div className="flex items-center justify-between relative">
        <img
          src="/logo.svg"
          alt="Blogr's logo"
          className="object-contain w-20 h-20"
        />
        <nav className="flex">
          <button className="block md:hidden" onClick={handleClick}>
            <img
              src={imgSrc}
              alt={`${
                imgSrc === IconHamburger.src ? "Open menu" : "Close menu"
              }`}
            />
          </button>
          <div
            className={`
            ${isOpen ? "flex relative" : "hidden md:flex"}
            `}
          >
            <Menu />
          </div>
        </nav>
      </div>
    </StrictMode>
  );
};

export default HamburgerMenu;

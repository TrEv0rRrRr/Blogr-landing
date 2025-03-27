import ArrowIcon from "@assets/icon-arrow.svg";
import Button from "@components/Button";
import { LINKS } from "@consts/Links";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleClick = (index: number) => {
    setIsOpen(!isOpen);
    setActiveIndex(index);
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-8 
      bg-white absolute -left-41 -translate-x-1/2 
      px-20 py-8 top-15 rounded-md w-80.5 z-50 shadow-2xl"
    >
      <div className="flex flex-col gap-4">
        {LINKS.map(({ links, title }, index) => {
          const isIndex = isOpen && activeIndex === index;
          return (
            <div
              className="flex flex-col gap-4 items-center justify-center"
              key={`${title.toLowerCase()}-${index}`}
            >
              <button
                className="text-Menu-text hover:text-neutral-900 font-medium flex items-center gap-3 cursor-pointer text-[1.1rem]"
                onClick={() => handleClick(index)}
                role="button"
                aria-expanded={isIndex}
                tabIndex={isIndex ? 0 : -1}
              >
                {title}
                <img
                  src={ArrowIcon.src}
                  alt={`${
                    isOpen ? `Open ${title} menu` : `Close ${title} menu`
                  }`}
                  className={`transition-all ${
                    isIndex ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <ul
                className={`gap-2 text-Menu-text bg-Footer-link/25 w-70 py-0
                rounded-md overflow-hidden transition-all duration-300 ease-in-out
                origin-top ${
                  isIndex
                    ? "max-h-96 opacity-100 py-6 flex flex-col items-center justify-center"
                    : "max-h-0 opacity-0 flex flex-col items-center justify-center"
                }`}
              >
                {links.map((link, linkIndex) => (
                  <li key={`${link}-${linkIndex}`}>
                    <a
                      href="#"
                      className="hover:text-neutral-900 
                      hover:underline transition-all duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-center gap-5 border-t border-t-Footer-link/50 w-70 pt-7 pb-2">
        <button className="cursor-pointer text-Menu-text hover:hover:text-neutral-900 text-[1.15rem]">
          Login
        </button>
        <Button
          colorStyles="bg-linear-to-r from-Gradient-Header-from to-Gradient-Header-to  hover:from-Action-hover hover:to-Action-hover"
          text="Sign Up"
          differentPadding
        />
      </div>
    </div>
  );
};

export default Menu;

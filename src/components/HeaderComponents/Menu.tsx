import ArrowIcon from "@assets/icon-arrow.svg";
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
      className="flex flex-col items-center justify-center gap-8 bg-white absolute -left-40 -translate-x-1/2 
      px-20 py-6 top-15 rounded-md w-80 z-50 shadow-2xl"
    >
      <div className="flex flex-col gap-4">
        {LINKS.map(({ links, title }, index) => {
          const isIndex = isOpen && activeIndex === index;
          return (
            <div
              className="flex flex-col gap-4 items-center justify-center"
              id={title.toLowerCase()}
            >
              <button
                className="text-Primary-paragraphs font-medium flex items-center gap-3 cursor-pointer text-[1.1rem]"
                onClick={() => handleClick(index)}
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
                className={`gap-2 text-Menu-text bg-Footer-link/40 w-70 py-4 
                  rounded-md ${
                    isIndex
                      ? "flex flex-col items-center justify-center"
                      : "hidden"
                  }`}
              >
                {links.map((link) => (
                  <li>
                    <a
                      href="#"
                      className="hover:text-Footer-title/90 hover:underline transition-all duration-200"
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
        <button className="cursor-pointer text-Footer-background">Login</button>
        <button className="cursor-pointer text-Footer-background">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Menu;

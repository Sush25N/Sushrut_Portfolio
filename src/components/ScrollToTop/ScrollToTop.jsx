import React, { useEffect, useState } from "react";
import "./scroll.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const ScrollToTopBottom = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [scrollToBottomButton, setScrollToBottomButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }

      if (
        window.innerHeight + window.scrollY <
        document.documentElement.scrollHeight - 100
      ) {
        setScrollToBottomButton(true);
      } else {
        setScrollToBottomButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-buttons">
      {backToTopButton && (
        <button className="scroll-up" onClick={scrollUp}>
          <AiOutlineArrowUp />
        </button>
      )}
      {scrollToBottomButton && (
        <button className="scroll-down" onClick={scrollDown}>
          <AiOutlineArrowDown />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopBottom;

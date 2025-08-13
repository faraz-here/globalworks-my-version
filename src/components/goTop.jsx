import React, { useEffect, useState } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToVisible = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setIsVisible(winScroll > heightToVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={goToTop}
          className="z-50 cursor-pointer fixed bottom-10 border-2 border-[#061C38] right-4 w-12 h-12 bg-white text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#114F9E] transition-all duration-300"
          aria-label="Go to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#061C38"
            width="28px"
            height="28px"
          >
            <path d="M12 2L4 10h5v8h6v-8h5z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default GoToTop;

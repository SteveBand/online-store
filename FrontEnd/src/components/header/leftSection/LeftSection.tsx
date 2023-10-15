import { BsList } from "react-icons/bs";
import { LeftSectionWrapper } from "./leftSection-style";
import { FiSearch } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

export const LeftSection: React.FC<Props> = ({
  activeSearch,
  setActiveSearch,
}) => {
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleInput(ev: any) {
      if (inputRef.current && !inputRef.current.contains(ev.target)) {
        setActiveSearch(false);
      }
    }

    window.addEventListener("click", handleInput);

    return () => {
      window.removeEventListener("click", handleInput);
    };
  }, []);

  return (
    <LeftSectionWrapper $activeSearch={activeSearch}>
      <BsList className="icon" />
      <div className="search-input" ref={inputRef}>
        <input
          placeholder="Search"
          type="text"
          onClick={() => setActiveSearch(true)}
        />
        <FiSearch className="search-icon" />
      </div>
    </LeftSectionWrapper>
  );
};

interface Props {
  activeSearch: boolean;
  setActiveSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

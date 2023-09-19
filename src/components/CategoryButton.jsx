import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const CategoryButton = ({
  setIsDropdownActive,
  isDropdownActive,
  category,
}) => {
  const dropdownRef = useRef(null);

  const handleDropdownActive = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownActive(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      onClick={handleDropdownActive}
      ref={dropdownRef}
      className="w-auto inline-block cursor-pointer"
    >
      <ul>
        <div className="bg-gray-800 rounded hover:bg-gray-700 animation duration-300 text-white relative px-10 py-2">
          <p className="text-white text-sm">
            Category{" "}
            <FontAwesomeIcon className="text-sm mb-1 ms-1" icon={faSortDown} />
          </p>
          <ul
            className={`${
              isDropdownActive ? "flex" : "hidden"
            } absolute left-0 top-10 w-full flex-col z-50`}
          >
            <p
              onClick={category}
              id="vocab"
              className="bg-gray-600 hover:bg-gray-700 transition duration-300 py-2 px-4"
            >
              Vocab
            </p>
            <p
              onClick={category}
              id="kanji-n5"
              className="bg-gray-600 hover:bg-gray-700 transition duration-300 py-2 px-4"
            >
              Kanji N5
            </p>
            <p
              onClick={category}
              id="kanji-n4"
              className="bg-gray-600 hover:bg-gray-700 transition duration-300 py-2 px-4"
            >
              Kanji N4
            </p>
            <p
              onClick={category}
              id="kanji-n3"
              className="bg-gray-600 hover:bg-gray-700 transition duration-300 py-2 px-4"
            >
              Kanji N3
            </p>
            <p
              onClick={category}
              id="kanji-n2"
              className="bg-gray-600 hover:bg-gray-700 transition duration-300 py-2 px-4"
            >
              Kanji N2
            </p>
            <p
              onClick={category}
              id="kanji-n1"
              className="bg-gray-600 hover:bg-gray-700 transition duration-300 py-2 px-4"
            >
              Kanji N1
            </p>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default CategoryButton;

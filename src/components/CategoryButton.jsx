import React from "react";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CategoryButton = ({
  setIsDropdownActive,
  isDropdownActive,
  category,
}) => {
  const handleDropdownActive = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <div onClick={handleDropdownActive} className="w-auto inline-block ">
      <ul>
        <div className="bg-gray-800 text-white relative px-10 py-2">
          <p className="text-white">
            Category{" "}
            <FontAwesomeIcon className="text-sm mb-1 ms-1" icon={faSortDown} />
          </p>
          <ul
            className={`${
              isDropdownActive ? "flex" : "hidden"
            } absolute left-0 top-10 w-full flex-col z-50`}
          >
            <p onClick={category} id="vocab" className="bg-gray-600 py-2 px-4">
              Vocab
            </p>
            <p
              onClick={category}
              id="kanji-n5"
              className="bg-gray-600 py-2 px-4"
            >
              Kanji N5
            </p>
            <p
              onClick={category}
              id="kanji-n4"
              className="bg-gray-600 py-2 px-4"
            >
              Kanji N4
            </p>
            <p
              onClick={category}
              id="kanji-n3"
              className="bg-gray-600 py-2 px-4"
            >
              Kanji N3
            </p>
            <p
              onClick={category}
              id="kanji-n2"
              className="bg-gray-600 py-2 px-4"
            >
              Kanji N2
            </p>
            <p
              onClick={category}
              id="kanji-n1"
              className="bg-gray-600 py-2 px-4"
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

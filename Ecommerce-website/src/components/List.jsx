import React from "react";

const List = ({ text, className }) => {
  return (
    //<div>List</div>
    <li
      className={` text-sm text-[#767676] font-dm font-normal list-none hover:text-secondary duration-500 hover:font-bold ${className}`}
    >
      {text}
    </li>
  );
};

export default List;

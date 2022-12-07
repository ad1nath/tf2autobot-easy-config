import { memo } from "react";

const TagList = ({ tag, removeTag }) => {
  const handleClick = () => {
    removeTag(tag);
  };
  return (
    <li
      onClick={handleClick}
      className="bg-slate-700 hover:text-lime-500 text-slate-200 sm:text-sm px-1 m-0.5 rounded-md text-center hover:cursor-pointer self-center"
    >
      {tag}
    </li>
  );
};

export default memo(TagList);

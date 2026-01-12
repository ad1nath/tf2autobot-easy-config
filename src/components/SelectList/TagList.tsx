import { memo } from "react";

const TagList = ({ tag }) => {
  return (
    <li
      id={tag}
      className="bg-linear-gray hover:bg-linear-accent text-linear-text sm:text-sm px-2 py-1 m-1 text-center hover:cursor-pointer self-center border border-linear-border hover:border-linear-accent transition-colors"
    >
      {tag}
    </li>
  );
};

export default memo(TagList);

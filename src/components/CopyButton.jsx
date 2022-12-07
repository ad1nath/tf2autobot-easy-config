import { ClipboardIcon } from "@heroicons/react/24/outline";

const CopyButton = ({ onClick, classes }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes} group relative invisible content-bg-white group-hover/option:visible`}
    >
      <span
        data-copy="copy command"
        data-copied="copied!"
        className="group-hover:scale-100 inline transition-transform duration-300 origin-left left-full  mr-2  -translate-y-1/4 scale-0 bg-gray-600 px-1 text-sm text-gray-100 rounded-md absolute 
    before:content-[attr(data-copy)] group-active:before:content-[attr(data-copied)]
    "
      ></span>
      <ClipboardIcon className="h-5 w-5 self-center text-white active:text-lime-500" />{" "}
    </button>
  );
};

export default CopyButton;

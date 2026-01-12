import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const CopyButton = ({ onClick, classes }) => {
  const [copy, setCopy] = useState("Copy Command");
  return (
    <button
      onClick={() => {
        setCopy("Copied Command");
        setTimeout(() => {
          setCopy("Copy Command");
        }, 1500);
        onClick();
      }}
      className={`${classes} group relative invisible content-bg-white group-hover/option:visible`}
    >
      <span
        data-copy={copy}
        className="group-hover:scale-100 inline transition-transform duration-300 origin-left left-full  mr-2  -translate-y-1/4 scale-0 bg-linear-darker border border-linear-border px-2 py-1 text-sm text-linear-text absolute
    before:content-[attr(data-copy)]
    "
      />
      {copy === "Copy Command" ? (
        <ClipboardDocumentIcon className="h-5 w-5 self-center text-linear-text-secondary hover:text-linear-text transition-colors" />
      ) : (
        <ClipboardDocumentCheckIcon className="h-5 w-5 self-center text-linear-accent" />
      )}
    </button>
  );
};

export default CopyButton;

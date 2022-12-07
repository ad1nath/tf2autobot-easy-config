import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Dropdown = ({ id, options, defaultValue, sendSelected }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(
    options.find((option) => {
      return option.value === defaultValue;
    }).name
  );

  const handleSelect = (item) => {
    setSelected(item.name);
    setShow((pre) => !pre);
    sendSelected(item.value);
  };

  return (
    <div>
      <button
        onClick={() => {
          setShow((pre) => !pre);
        }}
        // className="bg-lime-800 relative "
        className={`inline-flex group p-1 px-2 bg-slate-700 align-center hover:bg-slate-900 active:bg-slate-900  border-slate-900 border-1 rounded-md text-sm text-center text-slate-200`}
      >
        {selected}
        <ChevronDownIcon
          className={`w-5 h-5 ml-2 group-hover:text-lime-500 transition-transform  duration-300 text-black ${
            show ? "rotate-180" : ""
          }`}
        />
      </button>
      <ul
        className={`absolute border-slate-900 border-2 ${
          show ? "visible" : "invisible"
        }  py-2 bg-slate-700 mt-2 shadow-md  max-h-52 h-max overflow-y-auto
          scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-transparent border scrollbar-thumb-rounded-lg
          rounded-lg`}
        // className="absolute  bg-slate-900"
      >
        {options.map((item) => (
          <li
            className={`text-slate-lime px-2 pt-0.5 hover:bg-slate-800 hover:cursor-pointer hover:text-lime-500 ${
              item.name === selected ? "text-lime-600 " : ""
            }`}
            key={item.name}
            name={item.name}
            value={item.value}
            onMouseDown={handleSelect.bind(this, item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

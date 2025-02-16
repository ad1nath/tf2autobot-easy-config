import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useOptions from "../../store/useOptions";
import { optionActions } from "../../store/options-ctx";

const Navigate = () => {
  const [show, setShow] = useState(false);
  const { options } = useOptions();
  const keyList = Object.keys(options);
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const lastKey = keyList.length - 1;
  let lastItem = keyList[current - 1];
  let currentItem = keyList[current];
  let nextItem = keyList[current + 1];

  useEffect(() => {
    if (keyList.length > 0) {
      scrollTo({ behavior: "smooth", top: 72 });
      scroll;
      dispatch(optionActions.makeActive(keyList[current]));
    }
  }, [current]);
  const handleLast = () => {
    setCurrent((pre) => {
      if (0 > pre - 1) {
        return lastKey;
      } else return pre - 1;
    });
  };

  const handleMiddle = (e) => {
    setCurrent(e.target.id);
    setShow((pre) => !pre);
  };
  const handleNext = () => {
    setCurrent((pre) => {
      if (pre + 1 > lastKey) {
        return 0;
      } else {
        return pre + 1;
      }
    });
  };
  return (
    <nav className="bg-slate-900 flex  justify-center text-white font-semibold py-2 align-center sticky top-0 md:hidden">
      <button
        className="p-2 hover:bg-slate-800 w-1/3 m-2 rounded-xl text-sm select:none"
        onClick={handleLast}
      >
        {lastItem || "Jump to end"}
      </button>
      <ChevronLeftIcon className="h-5 w-5 self-center" />
      <div className="group  relative">
        <button
          onClick={() => {
            setShow((pre) => !pre);
          }}
          className={`p-2 m-2 rounded-xl group text-sm text-center text-lime-500`}
        >
          {currentItem}
        </button>
        <ul
          onClick={handleMiddle}
          className={`absolute ${
            show ? "visible" : "invisible"
          }  p-2 bg-slate-700 h-52 overflow-y-auto border-lime-500 drop-shadow-md 
        translate-x-1/2 z-10 right-1/2 scrollbar-thin scrollbar-thumb-slate-500 scrollbar-thumb-rounded-md scrollbar-track-transparent
        rounded-lg`}
        >
          {keyList.map((item, index) => (
            <li
              className={`text-slate-lime p-1 hover:cursor-pointer hover:text-lime-500 ${
                index === current ? "text-lime-600" : ""
              } `}
              key={item}
              id={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <ChevronRightIcon className="h-5 w-5 self-center" />
      <button
        className="p-2 hover:bg-slate-800 w-1/3 m-2 text-sm rounded-xl "
        onClick={handleNext}
      >
        {nextItem || "Jump to start"}
      </button>
    </nav>
  );
};

export default Navigate;

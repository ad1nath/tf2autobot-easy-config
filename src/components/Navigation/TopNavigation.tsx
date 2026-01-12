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
    <nav className="bg-linear-darker border-b border-linear-border flex justify-center text-linear-text font-medium py-3 align-center sticky top-0 md:hidden">
      <button
        className="px-3 py-2 hover:bg-linear-gray transition-colors text-sm border border-linear-border"
        onClick={handleLast}
      >
        {lastItem || "Jump to end"}
      </button>
      <ChevronLeftIcon className="h-5 w-5 self-center text-linear-text-secondary" />
      <div className="group relative">
        <button
          onClick={() => {
            setShow((pre) => !pre);
          }}
          className="px-3 py-2 text-sm text-linear-text border border-linear-border hover:bg-linear-gray transition-colors"
        >
          {currentItem}
        </button>
        <ul
          onClick={handleMiddle}
          className={`absolute ${
            show ? "visible" : "invisible"
          } bg-linear-darker border border-linear-border py-2 max-h-52 overflow-y-auto translate-x-1/2 z-10 right-1/2 shadow-lg`}
        >
          {keyList.map((item, index) => (
            <li
              className={`px-3 py-2 hover:bg-linear-gray cursor-pointer text-sm transition-colors ${
                index === current
                  ? "text-linear-accent bg-linear-gray"
                  : "text-linear-text-secondary hover:text-linear-text"
              } `}
              key={item}
              id={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <ChevronRightIcon className="h-5 w-5 self-center text-linear-text-secondary" />
      <button
        className="px-3 py-2 hover:bg-linear-gray transition-colors text-sm border border-linear-border"
        onClick={handleNext}
      >
        {nextItem || "Jump to start"}
      </button>
    </nav>
  );
};

export default Navigate;

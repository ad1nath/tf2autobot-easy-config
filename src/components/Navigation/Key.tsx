import { toLabel } from "../../utils/utils";
import useOptions from "../../store/useOptions";

const Key = ({ name }: { name: string }) => {
  const { activeItem: active } = useOptions();
  return (
    <li
      id={name}
      className={`px-4 py-3 hover:bg-gray-700/50 hover:cursor-pointer font-medium text-sm transition-colors duration-200 rounded-lg mx-2 mb-1
       ${
         active === name
           ? "bg-blue-600/20 text-blue-300 border-l-2 border-blue-400"
           : "text-gray-300 hover:text-white"
       } `}
    >
      {toLabel(name)}
    </li>
  );
};

export default Key;

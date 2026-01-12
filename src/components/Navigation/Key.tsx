import { toLabel } from "../../utils/utils";
import useOptions from "../../store/useOptions";

const Key = ({ name }: { name: string }) => {
  const { activeItem: active } = useOptions();
  return (
    <li
      id={name}
      className={`px-5 py-0.5 hover:shadow-lg shadow-black hover:cursor-pointer font-bold border-b border-gray-700
       ${
         active === name
           ? "bg-gray-800 text-white hover:bg-gray-800"
           : "hover:bg-gray-700 text-gray-300"
       } `}
    >
      {toLabel(name)}
    </li>
  );
};

export default Key;

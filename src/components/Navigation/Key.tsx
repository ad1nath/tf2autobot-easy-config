import { toLabel } from "../../utils/utils";
import useOptions from "../../store/useOptions";

const Key = ({ name }: { name: string }) => {
  const { activeItem: active } = useOptions();
  return (
    <li
      id={name}
      className={`rounded-md px-5 py-0.5 hover:ng hover:shadow-lg  shadow-slate-900 hover:cursor-pointer  font-bold
       ${
         active === name
           ? "bg-slate-900 text-lime-400 hover:bg-slate-900"
           : "hover:bg-slate-700 text-slate-200"
       } `}
    >
      {toLabel(name)}
    </li>
  );
};

export default Key;

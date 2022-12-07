import { useDispatch, useSelector } from "react-redux";
import { optionActions } from "../../store/options-ctx";
import { toLabel } from "../../utils/utils";

const Key = ({ name }) => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.options.activeItem);
  const makeActive = () => {
    dispatch(optionActions.makeActive(name));
  };
  return (
    <li
      onClick={makeActive}
      className={`rounded-md px-5 hover:ng hover:shadow-lg  shadow-slate-900 hover:cursor-pointer  font-bold
       ${
         active === name
           ? "bg-slate-900 text-lime-400 hover:bg-slate-900"
           : "hover:bg-slate-700 text-slate-200"
       } `}
    >
      <p className="p-1">{toLabel(name)}</p>
    </li>
  );
};

export default Key;

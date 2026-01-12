import { toLabel } from "../../utils/utils";
import useOptions from "../../store/useOptions";
import { useDispatch } from "react-redux";
import { optionActions } from "../../store/options-ctx";

const Key = ({ name }: { name: string }) => {
  const { activeItem: active } = useOptions();
  const dispatch = useDispatch();

  const handleClick = () => {
    scrollTo({ behavior: "smooth", top: 72 });
    dispatch(optionActions.makeActive(name));
  };

  return (
    <li
      id={name}
      className={`sidebar-link ${active === name ? "active" : ""}`}
      onClick={handleClick}
    >
      {toLabel(name)}
    </li>
  );
};

export default Key;

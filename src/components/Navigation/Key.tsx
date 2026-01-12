import { toLabel } from "../../utils/utils";
import useOptions from "../../store/useOptions";

const Key = ({ name }: { name: string }) => {
  const { activeItem: active } = useOptions();
  return (
    <li id={name} className={`sidebar-link ${active === name ? "active" : ""}`}>
      {toLabel(name)}
    </li>
  );
};

export default Key;

import Key from "./Key";
import { useDispatch } from "react-redux";
import useOptions from "../../store/useOptions";
import { optionActions } from "../../store/options-ctx";

const KeyList = () => {
  const { options } = useOptions();
  const dispatch = useDispatch();
  const makeActive = (e) => {
    scrollTo({ behavior: "smooth", top: 72 });
    if (e?.target?.id) {
      dispatch(optionActions.makeActive(e?.target?.id));
    }
  };

  const keyList = Object.keys(options).map((option) => (
    <Key key={option} name={option} />
  ));
  return (
    <div className="space-y-1">
      <h3 className="px-3 py-2 text-xs font-semibold text-linear-text-secondary uppercase tracking-wider">
        Configuration Keys
      </h3>
      <ul onClick={makeActive} className="space-y-1">
        {keyList}
      </ul>
    </div>
  );
};

export default KeyList;

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
    <ul onClick={makeActive} className="p-1">
      {keyList}
    </ul>
  );
};

export default KeyList;

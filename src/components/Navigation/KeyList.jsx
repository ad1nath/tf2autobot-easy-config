import Key from "./Key";
import { useSelector } from "react-redux";

const KeyList = () => {
  const options = useSelector((state) => state.options.options);
  const keyList = Object.keys(options).map((option) => (
    <Key key={option} name={option} />
  ));
  return <ul className="p-1">{keyList}</ul>;
};

export default KeyList;

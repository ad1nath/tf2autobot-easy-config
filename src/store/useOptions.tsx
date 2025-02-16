import { useSelector } from "react-redux";
import { RootState } from ".";

const useOptions = () => {
  const options = useSelector((state: RootState) => state.options);
  return options;
};

export default useOptions;

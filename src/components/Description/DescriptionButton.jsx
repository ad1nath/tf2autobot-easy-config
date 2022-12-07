import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { optionActions } from "../../store/options-ctx";

const DescriptionButton = ({ externalClasses }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`m-1 ${externalClasses}`}
      onClick={() => {
        dispatch(optionActions.toggleDescriptionBox());
      }}
    >
      <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
    </button>
  );
};

export default DescriptionButton;

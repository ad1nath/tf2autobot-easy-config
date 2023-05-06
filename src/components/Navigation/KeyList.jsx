import Key from "./Key";
import { useDispatch, useSelector } from "react-redux";
import { optionActions } from "../../store/options-ctx";

const KeyList = () => {
	const options = useSelector((state) => state.options.options);
	const dispatch = useDispatch();
	const makeActive = (e) => {
		scrollTo({ behavior: "smooth", top: 72 });
		dispatch(optionActions.makeActive(e.target.id));
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

const List = ({ option }) => {
	return (
		<li
			id={option}
			className="text-slate-lime p-1 px-2 hover:bg-slate-800 hover:cursor-pointer hover:text-lime-500  text-sm"
		>
			{option}
		</li>
	);
};

export default List;

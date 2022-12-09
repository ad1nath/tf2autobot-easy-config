const List = ({ option, addTag }) => {
  const handleClick = () => {
    addTag(option);
  };
  return (
    <li
      className="text-slate-lime p-1 px-2 hover:bg-slate-800 hover:cursor-pointer hover:text-lime-500  text-sm"
      onMouseDown={handleClick}
    >
      {option}
    </li>
  );
};

export default List;

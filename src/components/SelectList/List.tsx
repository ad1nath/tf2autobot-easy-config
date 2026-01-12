const List = ({ option }) => {
  return (
    <li
      id={option}
      className="text-linear-text p-2 px-3 hover:bg-linear-gray hover:cursor-pointer text-sm transition-colors"
    >
      {option}
    </li>
  );
};

export default List;

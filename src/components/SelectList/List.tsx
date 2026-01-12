const List = ({ option }) => {
  return (
    <li
      id={option}
      className="text-white p-1 px-2 hover:bg-gray-700 hover:cursor-pointer hover:text-white text-sm"
    >
      {option}
    </li>
  );
};

export default List;

import { useDispatch } from "react-redux";

const Parameters = ({ parameters }) => {
  const parameterList = parameters.map((parameter) => {
    const param = parameter.split("-");
    return (
      <li key={parameter} className="text-white p-1 my-1">
        <span className="bg-gray-800 mr-1 p-1 px-2 text-center">
          {param[0]}
        </span>
        {param[1]}
      </li>
    );
  });
  return (
    <>
      <h2 className="font-bold">Parameters</h2>
      <ul className="bg-gray-800 p-2">{parameterList}</ul>
    </>
  );
};

export default Parameters;

import { useDispatch } from "react-redux";

const Parameters = ({ parameters, isList }) => {
  const parameterList = parameters.map((parameter) => {
    if (!isList) {
      const param = parameter.split("-");
      return (
        <li key={parameter} className="text-slate-100 p-1 my-1">
          <span className="bg-slate-800 mr-1 p-1 rounded-md px-2 text-center ">
            {param[0]}
          </span>
          {param[1]}
        </li>
      );
    } else {
      return (
        <li
          key={parameter}
          className="text-slate-100 my-1 bg-slate-800 mr-1 p-1 rounded-md px-2 text-center "
        >
          {parameter}
        </li>
      );
    }
  });
  return (
    <>
      <h2 className="font-bold">{isList ? "Options" : "Parameters"}</h2>
      <ul
        className={`bg-slate-700 p-2 rounded-md ${isList && "flex flex-wrap"}`}
      >
        {parameterList}
      </ul>
    </>
  );
};

export default Parameters;

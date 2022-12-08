import { useSelector } from "react-redux";
import Parameters from "./Parameters";

const Description = () => {
  const currentDescription = useSelector(
    (state) => state.options.currentDescription
  );
  const currentPath = useSelector((state) => state.options.currentPath);
  let content = (
    <p className="p-2 bg-slate-600 rounded-lg text-slate-100">
      Hover on a property to get a brief description
    </p>
  );
  if (currentDescription) {
    content = (
      <div className="text-slate-200">
        <p className="font-bold py-2 my-1">
          Type{" "}
          <span className="font-mono bg-slate-700 p-1 text-xs px-2 rounded-md">
            {currentDescription.type}
          </span>
        </p>
        <p className="font-bold py-2 my-1">
          Default{" "}
          <span className="font-mono bg-slate-700 text-sm p-1 px-2 rounded-md inline-block">
            {currentDescription.default.length === 0
              ? "empty"
              : currentDescription.default}
          </span>
        </p>

        <div className="mb-2">
          <h3 className="font-bold text-slate-100 ">Details</h3>
          <p className=" text-slate-200 bg-slate-700 shadow-inner p-2 leading-7 lg:text-md rounded-md">
            {currentDescription.details.length === 0
              ? "No description available."
              : currentDescription.details}
          </p>
        </div>
        {currentDescription.note && (
          <div>
            <h3 className="font-bold text-slate-100 my-1">Note</h3>
            <p className=" text-slate-200  bg-slate-700 shadow-inner leading-7  p-2 rounded-md">
              {currentDescription.note}
            </p>
          </div>
        )}
        {currentDescription.parameters && (
          <Parameters parameters={currentDescription.parameters} />
        )}
        {currentDescription.example && (
          <div className="mb-2">
            <h3 className="font-bold text-slate-100">Example</h3>
            {currentDescription.example.startsWith("http") ? (
              <img
                src={currentDescription.example}
                alt="example"
                className="rounded-md shadow-inner"
              />
            ) : (
              <p className=" text-slate-200  bg-slate-700 shadow-inner leading-5 p-2 rounded-md">
                {currentDescription.example}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {currentPath && (
        <h2 className="font-bold p-3 rounded-lg bg-gray-700 text-lime-400 ">
          {currentPath.replaceAll("_", " . ")}
        </h2>
      )}
      {content}
    </>
  );
};

export default Description;

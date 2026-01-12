import Parameters from "./Parameters";
import useOptions from "../../store/useOptions";
import Preview from "../Preview";
import { getConfigDoc } from "../../utils/configDocs";

const Description = () => {
  const { currentDescription, currentPath } = useOptions();
  const md = getConfigDoc(currentPath);
  let content = (
    <p className="p-2 bg-gray-700 text-white">
      Hover on a property to get a brief description
    </p>
  );
  if (currentDescription) {
    content = (
      <div className="text-slate-200">
        <p className="font-bold py-2 my-1">
          Type{" "}
          <span className="font-mono bg-gray-800 p-1 text-xs px-2">
            {currentDescription.type}
          </span>
        </p>
        <p className="font-bold py-2 my-1">
          Default{" "}
          <span className="font-mono bg-gray-800 text-sm p-1 px-2 inline-block">
            {currentDescription.default.length === 0
              ? "empty"
              : currentDescription.default}
          </span>
        </p>

        <div className="mb-2">
          <h3 className="font-bold text-slate-100 ">Details</h3>
          <p className=" text-white bg-gray-800 shadow-inner p-2 leading-7 lg:text-md">
            {currentDescription.details.length === 0
              ? "No description available."
              : currentDescription.details}
          </p>
        </div>
        {currentDescription.note && (
          <div>
            <h3 className="font-bold text-slate-100 my-1">Note</h3>
            <p className=" text-white bg-gray-800 shadow-inner leading-7 p-2">
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
                className="shadow-inner"
              />
            ) : (
              <p className=" text-white bg-gray-800 shadow-inner leading-5 p-2">
                {currentDescription.example}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
  if (currentDescription === null) {
    content = (
      <p className="p-2 bg-gray-700 mt-5 text-white">
        No description available for this property.
      </p>
    );
  }
  if (md) {
    content = <Preview markdownString={md} />;
  }
  return (
    <>
      {currentPath && (
        <h2 className="font-bold p-3 bg-gray-800 text-white">
          {currentPath.replaceAll("_", " . ")}
        </h2>
      )}
      {content}
    </>
  );
};

export default Description;

import Parameters from "./Parameters";
import useOptions from "../../store/useOptions";
import Preview from "../Preview";
import { getConfigDoc } from "../../utils/configDocs";

const Description = () => {
  const { currentDescription, currentPath } = useOptions();
  const md = getConfigDoc(currentPath);
  let content = (
    <p className="p-4 bg-linear-gray text-linear-text-secondary border border-linear-border">
      Hover on a property to get a brief description
    </p>
  );
  if (currentDescription) {
    content = (
      <div className="text-linear-text space-y-4">
        <div>
          <span className="font-medium text-linear-text-secondary">Type: </span>
          <code className="bg-linear-gray px-2 py-1 text-sm font-mono border border-linear-border">
            {currentDescription.type}
          </code>
        </div>
        <div>
          <span className="font-medium text-linear-text-secondary">
            Default:{" "}
          </span>
          <code className="bg-linear-gray px-2 py-1 text-sm font-mono border border-linear-border">
            {currentDescription.default.length === 0
              ? "empty"
              : currentDescription.default}
          </code>
        </div>

        <div>
          <h3 className="font-semibold text-linear-text mb-2">Details</h3>
          <p className="text-linear-text-secondary leading-relaxed bg-linear-gray p-3 border border-linear-border">
            {currentDescription.details.length === 0
              ? "No description available."
              : currentDescription.details}
          </p>
        </div>
        {currentDescription.note && (
          <div>
            <h3 className="font-semibold text-linear-text mb-2">Note</h3>
            <p className="text-linear-text-secondary leading-relaxed bg-linear-gray p-3 border border-linear-border">
              {currentDescription.note}
            </p>
          </div>
        )}
        {currentDescription.parameters && (
          <Parameters parameters={currentDescription.parameters} />
        )}
        {currentDescription.example && (
          <div>
            <h3 className="font-semibold text-linear-text mb-2">Example</h3>
            {currentDescription.example.startsWith("http") ? (
              <img
                src={currentDescription.example}
                alt="example"
                className="border border-linear-border"
              />
            ) : (
              <pre className="bg-linear-darker p-3 border border-linear-border overflow-x-auto">
                <code className="text-sm font-mono text-linear-text">
                  {currentDescription.example}
                </code>
              </pre>
            )}
          </div>
        )}
      </div>
    );
  }
  if (currentDescription === null) {
    content = (
      <p className="p-4 bg-linear-gray text-linear-text-secondary border border-linear-border">
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
        <h2 className="font-semibold text-lg p-4 bg-linear-gray border-b border-linear-border text-linear-text">
          {currentPath.replaceAll("_", " . ")}
        </h2>
      )}
      <div className="p-4">{content}</div>
    </>
  );
};

export default Description;

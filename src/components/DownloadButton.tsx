import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import useOptions from "../store/useOptions";

const DownloadButton = () => {
  const { editedOptions } = useOptions();
  const downloadFile = () => {
    const fileName = "options.json";
    const json = JSON.stringify(editedOptions, null, 4);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };
  return (
    <button
      className="bg-slate-700 px-3 h-8 py-1 self-center rounded-md font-semibold text-slate-100
             inline-flex items-center
             hover:shadow-md hover:bg-slate-800 hover:text-lime-500
             active:bg-slate-900"
      onClick={downloadFile}
    >
      <span className="hidden sm:inline">Download</span>
      <ArrowDownTrayIcon className="w-5 h-5 sm:ml-2" />
    </button>
  );
};

export default DownloadButton;

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { optionActions } from "./store/options-ctx";
import { toLabel } from "./utils/utils";

import Description from "./components/Description/Description";
import DownloadButton from "./components/DownloadButton";
import Items from "./components/Items";
import KeyList from "./components/Navigation/KeyList";
import Navigate from "./components/Navigation/TopNavigation";
import SideBar from "./components/Description/SideBar";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.options.activeItem);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TF2Autobot/tf2autobot/master/.example/options.json"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(optionActions.setOptions(data));
      })
      .catch((err) => setError(err));
    fetch("/description.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(optionActions.setDescriptions(data));
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <header className="p-5  bg-slate-900 flex justify-between">
        <h1 className=" text-slate-100 font-semibold text-xl">
          TF2Autobot EasyConfig
        </h1>
        <DownloadButton />
      </header>
      <Navigate />
      <div className="flex bg-slate-800 gap-3">
        <aside
          className="h-screen sticky  shadow-xl shadow-black hidden md:block top-0 my-3 bg-slate-800 p-5 overflow-y-auto w-1/5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent scrollbar-thumb-rounded-xl 
        rounded-lg"
        >
          <KeyList />
        </aside>
        <main
          className="  shadow-black shadow-2xl
        md:p-10 p-2 md:w-2/5 w-full bg-slate-800 rounded-lg my-3 min-h-screen"
        >
          <h2 className="text-xl font-medium p-5 rounded-lg bg-slate-900 text-lime-500 hidden md:block ">
            {error ? "ERROR" : toLabel(active)}
          </h2>
          {error ? (
            <p className="text-slate-200 p-2">{error.message}</p>
          ) : (
            <Items />
          )}
        </main>
        <aside
          className="h-screen sticky top-0 p-5 shadow-black shadow-xl  md:block hidden w-2/5 bg-slate-800  overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-500 
        rounded-lg my-3"
        >
          <Description />
        </aside>
        <SideBar />
      </div>
      <Footer />
    </>
  );
}

export default App;

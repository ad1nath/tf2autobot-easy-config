import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { createFileRoute, Link } from "@tanstack/react-router";
import DownloadButton from "../components/DownloadButton";
import KeyList from "../components/Navigation/KeyList";
import Navigate from "../components/Navigation/TopNavigation";
import Description from "../components/Description/Description";
import SideBar from "../components/Description/SideBar";
import Footer from "../components/Footer";
import { optionActions } from "../store/options-ctx";
import Items from "../components/Items";
import Dropdown from "../components/Dropdown";

const botOptions = {
  Tf2Autobot:
    "https://raw.githubusercontent.com/TF2Autobot/tf2autobot/master/.example/options.json",
  PriceDB:
    "https://raw.githubusercontent.com/TF2-Price-DB/tf2autobot-pricedb/master/.example/options.json",
};

type Bot = keyof typeof botOptions;
const selectOptions = Object.keys(botOptions).map((o) => ({
  name: o,
  value: o,
}));
function Generate() {
  const { bot }: { bot: Bot } = Route.useSearch();
  const navigate = Route.useNavigate();

  const dispatch = useDispatch();
  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(optionActions.resetState());

    fetch(botOptions[bot])
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
  }, [bot]);

  return (
    <>
      <header className="p-5 bg-black flex justify-between">
        <Link to="/">
          <h1 className="text-white font-bold text-xl">
            <span className="hidden sm:inline">TF2Autobot EasyConfig</span>
            <span className="sm:hidden">EZConfig</span>
          </h1>
        </Link>
        <div className="flex gap-2">
          <Dropdown
            defaultValue={bot}
            onValueChange={(value) => {
              navigate({
                search: () => ({
                  bot: value,
                }),
              });
            }}
            options={selectOptions}
          />
          <DownloadButton />
        </div>
      </header>
      <Navigate />
      <div className="flex bg-black gap-3">
        <aside className="sticky hidden md:block top-0 my-3 p-6 bg-gray-900/50 backdrop-blur-sm border-r border-gray-700/50">
          <KeyList />
        </aside>
        <main className="md:p-10 p-2 md:w-2/5 w-full my-3 min-h-screen">
          {error ? (
            <>
              <h2 className="text-xl font-medium p-5 text-red-400 hidden md:block">
                ERROR
              </h2>
              <p className="text-slate-200 p-2">{error.message}</p>
            </>
          ) : (
            <Items />
          )}
        </main>
        <aside className="h-screen sticky top-0 p-5 md:block hidden w-2/5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent my-3">
          <Description />
        </aside>
        <SideBar />
      </div>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/generate")({
  component: Generate,
  validateSearch: (search: Record<string, unknown>) => ({
    ...search,
    bot:
      typeof search.bot === "string" &&
      Object.keys(botOptions).includes(search.bot as Bot)
        ? search.bot
        : "Tf2Autobot",
  }),
});

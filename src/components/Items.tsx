import Input from "./Input";
import { useSelector } from "react-redux";
import { getClosest, toLabel } from "../utils/utils";
import useOptions from "../store/useOptions";

const Items = ({ items, title, item_id }) => {
  const { descriptions, activeItem: active, options } = useOptions();

  if (options.length < 1 || descriptions.length < 1) {
    return (
      <h2 className="text-lime-500 text-lg p-2 text-center">Loading...</h2>
    );
  }
  items = items || options[active];
  let itemList = Object.keys(items).map((item) => {
    const itemType = typeof items[item];
    const id = `${item_id || active}_${item}`;
    let type;
    itemType === "string"
      ? (type = "text")
      : itemType === "boolean"
        ? (type = "checkbox")
        : itemType === "number"
          ? (type = "number")
          : Array.isArray(items[item])
            ? (type = "list")
            : type === "null";
    if (!type) {
      return <Items items={items[item]} title={item} item_id={id} key={id} />;
    } else {
      return (
        <Input
          description={getClosest(id, descriptions)}
          key={id}
          type={type}
          label={toLabel(item)}
          value={items[item]}
          id={id}
          isChecked={type === "checkbox" && items[item]}
        />
      );
    }
  });
  return (
    <>
      {!title && (
        <h2 className="text-xl font-medium p-5 rounded-lg bg-slate-900 text-lime-500 hidden md:block ">
          {toLabel(active)}
        </h2>
      )}
      {title && (
        <h2
          className=" my-1.5 mt-2 p-1 pl-2  font-[500]   
        rounded-t-lg from-slate-900  shadow-slate-900  bg-gradient-to-r shadow-sm   text-lime-400
        "
        >
          {toLabel(title)}
        </h2>
      )}
      <ul className="pl-4 md:pl-6 shadow-slate-900 shadow-md  rounded-b-2xl  pb-2">
        {itemList}
      </ul>
    </>
  );
};

export default Items;

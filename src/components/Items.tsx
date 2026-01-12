import Input from "./Input";
import { useSelector } from "react-redux";
import { getClosest, toLabel } from "../utils/utils";
import useOptions from "../store/useOptions";

const Items = ({ items, title, item_id }) => {
  const { descriptions, activeItem: active, options } = useOptions();

  if (options.length < 1 || descriptions.length < 1) {
    return (
      <h2 className="text-linear-accent text-lg p-4 text-center">Loading...</h2>
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
        <h2 className="text-xl font-medium px-6 py-4 bg-linear-gray text-linear-text border-b border-linear-border hidden md:block">
          {toLabel(active)}
        </h2>
      )}
      {title && (
        <h2 className="my-2 p-3 font-medium bg-linear-gray text-linear-text border-b border-linear-border">
          {toLabel(title)}
        </h2>
      )}
      <ul className="px-6 py-4 space-y-2">{itemList}</ul>
    </>
  );
};

export default Items;

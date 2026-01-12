import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import MultipleSelect from "./SelectList/MultipleSelect";
import Dropdown from "./Dropdown";
import DescriptionButton from "./Description/DescriptionButton";
import CopyButton from "./CopyButton";
import useOptions from "../store/useOptions";
import { optionActions } from "../store/options-ctx";
import { NumberField } from "@base-ui/react/number-field";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const Input = ({ type, label, value, id, isChecked, description }) => {
  const [copiedData, setCopiedData] = useState("");
  const { currentValues } = useOptions();
  const currentValue = currentValues[id];
  const dispatch = useDispatch();
  const keyValue = description ? description["keyvalues"] : null;

  useEffect(() => {
    let data = currentValue === undefined ? value : currentValue;
    if (Array.isArray(data)) data = JSON.stringify(data);
    setCopiedData(`!config ${id.replaceAll("_", ".")}=${data}`);
  }, [id]);

  const copyData = () => {
    navigator.clipboard.writeText(copiedData);
  };
  const handleChange = (event) => {
    let inputValue = event.target.value;
    if (event.target.type === "number") {
      inputValue = +inputValue;
    }
    if (event.target.type === "checkbox") {
      inputValue = event.target.checked;
    }
    setCopiedData(`!config ${id.replaceAll("_", ".")}=${inputValue}`);
    dispatch(
      optionActions.editOption({
        optionValue: inputValue,
        optionKeys: id,
      })
    );
  };

  const handleNumberChange = (value) => {
    setCopiedData(`!config ${id.replaceAll("_", ".")}=${value}`);
    dispatch(
      optionActions.editOption({
        optionValue: value,
        optionKeys: id,
      })
    );
  };

  const handleEnter = () => {
    dispatch(optionActions.setCurrentDescription({ id, description }));
  };

  const handleTags = (data) => {
    setCopiedData(`!config ${id.replaceAll("_", ".")}=${JSON.stringify(data)}`);
    dispatch(
      optionActions.editOption({
        optionValue: data,
        optionKeys: id,
      })
    );
  };

  const handleSelect = (data) => {
    setCopiedData(`!config ${id.replaceAll("_", ".")}=${data}`);
    dispatch(
      optionActions.editOption({
        optionValue: data,
        optionKeys: id,
      })
    );
  };

  return (
    <li
      className="py-2 px-3 flex flex-wrap items-center group/option hover:bg-linear-gray/50 transition-colors"
      onMouseEnter={handleEnter}
    >
      <label
        htmlFor={id}
        className={`text-linear-text hover:cursor-pointer flex-1 min-w-0 ${
          type === "checkbox" ? "order-2 ml-2" : "mr-2"
        }`}
      >
        {label}
      </label>
      <DescriptionButton
        externalClasses={`${type === "checkbox" && "order-3"} md:hidden`}
      />
      <CopyButton
        onClick={copyData}
        classes={`mr-2 ${type === "checkbox" && "order-3 ml-3"}`}
      />
      {type === "list" && (
        <MultipleSelect
          label={label}
          id={id}
          sendTags={handleTags}
          defaultValue={currentValue || value}
          options={description ? description.options : null}
        />
      )}

      {type !== "list" && !keyValue && (
        <>
          {type === "number" ? (
            <NumberField.Root
              defaultValue={currentValue || value}
              onValueCommitted={handleNumberChange}
              className="flex-1 order-4 md:order-none"
            >
              <NumberField.Group
                className="
                  flex items-center
                  bg-linear-darker text-linear-text
                  border border-linear-border hover:border-linear-accent
                  px-3 py-2
                  placeholder:text-linear-text-secondary
                  focus-within:outline-none focus-within:border-linear-accent
                  transition-colors
                "
              >
                <NumberField.Decrement className="flex items-center justify-center w-6 h-6 text-linear-text-secondary hover:text-linear-text hover:bg-linear-gray rounded transition-colors">
                  <ChevronDownIcon className="h-4 w-4" />
                </NumberField.Decrement>
                <NumberField.Input
                  className="
                    flex-1 bg-transparent text-center
                    focus:outline-none
                  "
                />
                <NumberField.Increment className="flex items-center justify-center w-6 h-6 text-linear-text-secondary hover:text-linear-text hover:bg-linear-gray rounded transition-colors">
                  <ChevronUpIcon className="h-4 w-4" />
                </NumberField.Increment>
              </NumberField.Group>
            </NumberField.Root>
          ) : (
            <input
              onChange={handleChange}
              className={`
                bg-linear-darker text-linear-text
                border border-linear-border hover:border-linear-accent
                px-3 py-2
                placeholder:text-linear-text-secondary
                focus:outline-none focus:border-linear-accent
                transition-colors
                ${type === "text" ? "flex-1 order-4 md:order-none" : ""}
              `}
              type={type}
              defaultChecked={
                currentValue === undefined ? isChecked : currentValue
              }
              id={id}
              defaultValue={currentValue || value}
            />
          )}
        </>
      )}
      {keyValue && (
        <Dropdown
          options={keyValue}
          id={id}
          defaultValue={currentValue || value}
          onValueChange={handleSelect}
        />
      )}
    </li>
  );
};

export default Input;

import { useCallback } from "react";
import { useEffect, useState } from "react";
import List from "./List";
import TagList from "./TagList";

const MultipleSelect = ({ options, id, sendTags, defaultValue }) => {
  const [tags, setTags] = useState(defaultValue);
  const [value, setValue] = useState("");
  let optionsList = [];
  const addTag = (tag) => {
    if (tag === "no result" || tag === "") return;
    tag = tag.trim();
    setTags((pre) => [...pre, tag]);
    setValue("");
  };

  if (options) {
    let filtered = options.filter(
      (option) =>
        option.toLowerCase().includes(value.toLowerCase()) &&
        !tags.includes(option)
    );
    if (filtered.length === 0) {
      filtered = ["no result"];
    }
    optionsList = filtered.map((option) => (
      <List key={option} option={option} />
    ));
  }

  const handleAddClick = (e) => {
    addTag(e.target.id);
  };

  const removeTag = useCallback((tag) => {
    setTags((pre) => pre.filter((item) => item !== tag));
  }, []);

  useEffect(() => {
    sendTags(tags);
  }, [tags]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === ",") {
      addTag(addTag(value.replace(",", "").trim()));
    }
    setValue(event.target.value);
  };

  const tagList = tags.map((tag, index) => (
    <TagList key={`${tag}_${index}`} tag={tag} />
  ));

  const handleTagClick = (e) => {
    removeTag(e.target.id);
  };

  const handleKeyPress = (e) => {
    const key = e.key;
    if (key === "Enter" && value.length > 0) {
      addTag(e.target.value.replace(",", "").trim());
    }
  };

  const handleBlur = (event) => {
    if (!options) {
      addTag(event.target.value.trim());
    }
  };

  return (
    <div className="flex flex-wrap group flex-1">
      <div className="flex-1">
        <ul
          onClick={handleTagClick}
          className="flex bg-linear-darker flex-wrap shadow-sm 
          px-2 py-1 border border-linear-border hover:border-linear-accent transition-colors"
        >
          {tagList}
          <input
            id={id}
            type="text"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyUp={handleKeyPress}
            className="
          bg-linear-darker text-linear-text
           hover:outline-none outline-none
          pl-2 py-1
          sm:text-sm
          w-50 flex-1
          placeholder:text-linear-text-secondary
          
          "
            value={value}
            placeholder="press enter or use comma to seperate"
          />
        </ul>
        {options && (
          <ul
            onMouseDown={handleAddClick}
            className="max-h-40 border border-linear-border w-max py-1 absolute group-focus-within:visible shadow-lg invisible bg-linear-darker overflow-y-auto"
          >
            {optionsList}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultipleSelect;

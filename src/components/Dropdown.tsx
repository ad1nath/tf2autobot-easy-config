import * as React from "react";
import { Select } from "@base-ui/react/select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";

export default function Dropdown({ options, defaultValue, onValueChange }) {
  const items = options.map((item) => {
    return {
      label: item.name,
      value: item.value,
    };
  });
  return (
    <Select.Root
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      items={items}
    >
      <Select.Trigger
        className="
          group inline-flex h-8 min-w-36 items-center justify-between gap-2
          bg-gray-800 px-3 text-sm text-white
          border border-gray-700
          hover:bg-gray-700 active:bg-gray-800
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
          data-[popup-open]:bg-gray-800
        "
      >
        <Select.Value />
        <Select.Icon
          className="
            transition-transform duration-300
            group-data-[popup-open]:rotate-180
            text-gray-400 group-hover:text-white
          "
        >
          <ChevronDownIcon className="h-5 w-5" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner className="z-10" sideOffset={8}>
          <Select.Popup
            className="
              min-w-[var(--anchor-width)]
              border border-gray-700
              bg-gray-800 shadow-lg
              overflow-hidden
              outline-none
              data-[starting-style]:opacity-0 data-[ending-style]:opacity-0
              data-[starting-style]:scale-95 data-[ending-style]:scale-95
              transition-[opacity,transform]
            "
          >
            <Select.ScrollUpArrow className="top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute data-[side=none]:before:top-[-100%] before:left-0 before:h-full before:w-full before:content-['']" />
            <Select.List className="relative py-1 scroll-py-6 overflow-y-auto max-h-[var(--available-height)]">
              {items.map(({ label, value }) => (
                <Select.Item
                  key={label}
                  value={value}
                  className="
                  grid grid-cols-[0.75rem_1fr] items-center gap-2
                  py-2 pr-4 pl-2.5
                  text-sm leading-4
                  select-none outline-none
                  cursor-pointer
                text-white
                  /* highlighted state */
                  data-[highlighted]:relative
                  data-[highlighted]:z-0
                  data-[highlighted]:text-white
                  data-[highlighted]:before:absolute
                  data-[highlighted]:before:inset-x-1
                  data-[highlighted]:before:inset-y-0
                  data-[highlighted]:before:-z-10
                  data-[highlighted]:before:bg-black
                  data-[selected]:text-white
                  /* group variants */
                  group-data-[side=none]:pr-12
                  group-data-[side=none]:text-base
                  group-data-[side=none]:leading-4

                  /* coarse pointer devices */
                  pointer-coarse:py-2.5
                  pointer-coarse:text-[0.925rem]
                "
                >
                  <Select.ItemIndicator className="col-start-1">
                    <CheckIcon className="size-3" />
                  </Select.ItemIndicator>
                  <Select.ItemText className="col-start-2">
                    {label}
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.List>
            <Select.ScrollDownArrow className="bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] bottom-0 data-[side=none]:before:bottom-[-100%]" />
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

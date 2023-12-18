import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

type Props = {
  list: string[];
  onChangeFunc: (value: string) => void;
};

export default function FilterBox(props: Props) {
  return (
    <div className="flex gap-2 align-bottom my-5">
      <Select
        label="Category"
        labelPlacement="outside"
        isMultiline={true}
        placeholder="All"
        className="w-full sm:w-80 "
        onChange={(e) => props.onChangeFunc(e.target.value)}
      >
        {props.list.map((category: string) => (
          <SelectItem key={category}>
            {category}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

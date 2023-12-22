'use client'

import React from "react";
import { Select, SelectItem } from "@nextui-org/select";

function redirect(category: string) {
  if (category === 'All') {
    window.location.href = '/courses';
  } else {
    window.location.href = `/courses/category/${category}`;
  }
}

export default function FilterBox({ list, selectedKey }: { list: string[], selectedKey: string }) {
  list.sort()
  var categories = ['All', ...list]

  return (
    <div className="flex gap-2 mb-7">
      <Select
        label="Category"
        labelPlacement="outside"
        isMultiline={true}
        placeholder="All"
        className="w-full sm:w-80 shadow-lg"
        selectedKeys={[selectedKey]}
        onChange={(e) => redirect(e.target.value)}
      >
        {categories.map((category: string) => (
          <SelectItem key={category}>
            {category}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

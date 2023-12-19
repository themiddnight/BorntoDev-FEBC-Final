'use client'

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

function redirect(category: string) {
  if (category === 'All') {
    window.location.href = '/courses';
  } else {
    let categoryUrl = category.replace(/\s/g, '%20')
    window.location.href = `/courses/category/${categoryUrl}`;
  }
}

export default function FilterBox({ list, selectedKey }: { list: string[], selectedKey: string }) {
  list.sort()
  var categories = ['All', ...list]

  return (
    <div className="flex gap-2 align-bottom my-5">
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

'use client'

import React from "react";
import { Select, SelectItem } from "@nextui-org/select";

interface Props {
  list: Array<Category>,
  selectedKey: string
}

interface Category {
  id: number,
  title: string
}

function redirect(category: string) {
  if (category === 'All') {
    window.location.href = '/courses';
  } else {
    window.location.href = `/courses/category/${category}`;
  }
}

export default function FilterBox({ list, selectedKey }: Props) {
  var categories = [{id: 0, title: 'All'}, ...list]

  return (
    <div className="flex gap-2 mb-7">
      <Select
        label="Category"
        labelPlacement="outside"
        placeholder="All"
        className="w-full sm:w-80 shadow-lg"
        selectedKeys={[selectedKey]}
        onChange={(e) => redirect(e.target.value)}
        items={categories}
      >
        {(category) => (
          <SelectItem key={category.title} value={category.title}>
            {category.title}
          </SelectItem>
        )}
      </Select>
    </div>
  );
}

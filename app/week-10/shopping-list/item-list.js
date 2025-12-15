import { useState } from "react";
import ItemConstruct from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  let buttonStylesName =
    "text-purple-600 cursor-pointer text-shadow-sm shadow-purple-900";
  let buttonStylesCategory =
    "text-purple-600 cursor-pointer text-shadow-sm shadow-purple-900";

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      buttonStylesName =
        "opacity-10 text-black bg-transparent";
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }

    if (sortBy === "category") {
      buttonStylesCategory =
        "opacity-10 text-black bg-transparent";
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    }

    return 0;
  });

  return (
    <main className="p-8 font-extrabold flex flex-col">
      <p className="text-purple-700">Sort By:</p>
      <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 flex flex-row gap-30 
      font-bold justify-center m-10 p-10 rounded-3xl shadow-lg shadow-purple-500 ">
        
        <button
          className={buttonStylesName}
          type="button"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>

        <button
          className={buttonStylesCategory}
          type="button"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
        <p className={"border-1 items-center m-5"}></p>
      <ul className="flex justify-center-safe flex-wrap bg-gradient-to-b from-purple-200 via-pink-200
       to-purple-200 rounded-3xl overflow-auto shadow-lg shadow-purple-500">
        {sortedItems.map((item) => (
          <ItemConstruct
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </main>
  );
}

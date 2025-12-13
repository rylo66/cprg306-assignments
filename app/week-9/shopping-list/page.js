"use client"
import ItemList from "./item-list"
import itemsData from "./items.json"
import NewItem from "./new-item";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

function cleanIngredientName(text) {
  const emojiRemoved = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
  const trimmed = emojiRemoved.split(',')[0];
  return trimmed;
}

export default function Main() {
  const { user } = useUserAuth();
  
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  
  const handleAddItem = (item) => setItems([...items, item]);

  const handleItemSelect = (item) => {
    const trimmed = cleanIngredientName(item.name);
    setSelectedItemName(trimmed);
  };

    if (!user) {
    return (
      <main className="bg-white h-screen flex items-center justify-center">
        <p className="text-purple-700 font-bold">
          You must be signed in to view the shopping list.
        </p>
      </main>
    );
  }
    return(
        <main className=" bg-white h-screen overflow-scroll">
            <h1 className="text-center bg-gradient-to-r from-purple-900 via-purple-500 to-purple-200 
            p-4 text-4xl text-white font-extrabold border-2
             border-purple-600 w-screen">Week 9 Page - Riley Yonda</h1>
             <div className="flex flex-row ">
            <NewItem onAddItem={handleAddItem} className=""/>
            <p className="border-1 h-screen"></p>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <p className="border-1 h-screen"></p>
            <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    )
}
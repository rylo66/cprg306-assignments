"use client"
import ItemList from "./item-list"
import itemsData from "./items.json"
import NewItem from "./new-item";
import { useState } from "react";


export default function Main(){
    
    const handleAddItem = (event) => setItems([...items, event]);
    const [items, setItems] = useState(itemsData);
    return(
        <main className=" bg-white h-screen overflow-scroll">
            <h1 className="bg-gradient-to-r from-purple-900 via-purple-500 to-purple-200 p-4 text-4xl justify-center flex text-center text-white font-extrabold border-2 border-purple-600">Week 7 Page - Riley Yonda</h1>
            <NewItem onAddItem={handleAddItem}/>
            <p className="border-1"></p>
            <ItemList items={items}/>

            
        </main>
    )
}
import { useState } from "react";
import ItemConstruct from "./item.js";

export default function ItemList( {items} ){

    let buttonStylesName="bg-white text-blue-600 p-8 outline-2 cursor-pointer rounded-3xl shadow-lg shadow-blue-500 ";
    let buttonStylesCategory="bg-white text-blue-600 p-8 outline-2 cursor-pointer rounded-3xl shadow-lg shadow-blue-500 ";

    let [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            buttonStylesName="p-8 outline-1 rounded-3xl opacity-70 shadow-lg shadow-blue-500 text-white";  
            if (a.name < b.name){return -1};
            if (a.name > b.name){return 1};
            return 0;

        }   

        if (sortBy === "category") {
            buttonStylesCategory="p-8 outline-1 rounded-3xl opacity-70 shadow-lg shadow-blue-500 text-white";
            if (a.category < b.category){return -1};
            if (a.category > b.category){return 1};
            return 0;
        }
        });
    
    return(
        <main className=" p-4 font-extrabold flex flex-col justify-center items-center ">
            <div className="flex flex-row p-2 font-bold gap-30 m-5">

            <button className={buttonStylesName} type="button" onClick={() => setSortBy("name")} value={sortBy}>Name</button>

            <button className={buttonStylesCategory} type="button" onClick={() => setSortBy("category")} value={sortBy}>Category</button>
            </div>

            <div className=" flex flex-row h-10 justify-center flex-wrap"  >
            {sortedItems.map((items) => (
                <ItemConstruct 
                    key={items.id}
                    name={items.name}
                    quantity={items.quantity}
                    category={items.category}
                />
            ))}
            </div>
        </main>
    );
}
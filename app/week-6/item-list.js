import { useState } from "react";
import Item from "./item.js";
import itemNameCategory from "./items.json";


export default function ItemList(){

    let buttonStylesName="bg-gradient-to-r from-purple-900 via-purple-500 to-purple-200 text-emerald-100 m-2 p-4 outline-1  hover:from-red-300 hover:via-red-600 hover:to-red-950 cursor-pointer rounded-3xl opacity-70";
    let buttonStylesCategory="bg-gradient-to-r from-purple-900 via-purple-500 to-purple-200 text-emerald-100 m-2 p-4 outline-1  hover:from-red-300 hover:via-red-600 hover:to-red-950 cursor-pointer rounded-3xl opacity-70";

    let filter = itemNameCategory.map((item) => ( {item} ) );

    let [sortBy, setSortBy] = useState("name");

    filter.sort((a, b) => {
        if (sortBy === "name") {
            buttonStylesName="bg-purple-900 m-2 p-4 outline-1 rounded-3xl opacity-10";  
            if (a.item.name < b.item.name){return -1};
            if (a.item.name > b.item.name){return 1};
            return 0;

        }   

        if (sortBy === "category") {
            buttonStylesCategory="bg-purple-900 m-2 p-4 outline-1 rounded-3xl opacity-10";
            if (a.item.category < b.item.category){return -1};
            if (a.item.category > b.item.category){return 1};
            return 0;
        }
        });
    
    return(
        <main className="min-h-screen bg-gradient-to-r from-purple-200 via-purple-500 to-purple-900 p-4 font-extrabold flex flex-col">

            <div className="flex flex-row p-2 justify-center font-bold">

            <button className={buttonStylesName} type="button" onClick={() => setSortBy("name")} value={sortBy}>Name</button>

            <button className={buttonStylesCategory} type="button" onClick={() => setSortBy("category")} value={sortBy}>Category</button>
            </div>

            <div className="items-center flex flex-row flex-wrap justify-center">
            {filter.map(( {item} ) => (
                <Item 
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            ))}
            </div>
        </main>
    );
}
import { useState } from "react"
import React from "react"

export default function NewItem( {onAddItem} ){


    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleItemNameChange = (event) => setItemName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setItemName(""),
        setQuantity(1),
        setCategory("Produce")
            onAddItem({id:Math.random().toString(36).substring(2, 10), 
                name: itemName, quantity, category});

    }

    const increment = () => {
        if(quantity >= 0){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if(quantity <= 20){
            setQuantity(quantity - 1);
        }
    }

    const reset = () => setQuantity(0);

    let buttonIncrement = "shadow-lg shadow-purple-500 rounded-2xl bg-purple-400 text-white p-2 hover:bg-purple-800 cursor-pointer outline-1 m-2 rounded-3xl";
    let buttonDecrement = "shadow-lg shadow-purple-500 rounded-2xl bg-purple-400 text-white p-2 hover:bg-purple-800 cursor-pointer outline-1 m-2 rounded-3xl";
    let buttonReset = "shadow-lg shadow-purple-500 rounded-2xl bg-purple-400 text-white p-2 hover:bg-purple-800 cursor-pointer outline-1 m-2 rounded-3xl";
    let buttonSubmit = "shadow-lg shadow-purple-500 rounded-2xl bg-purple-400 text-white p-2 hover:bg-purple-800 cursor-pointer outline-1 m-2 rounded-3xl";
    let inputStyles = "text-center ";

    if (quantity <= 1){
        buttonDecrement = "m-2 bg-purple-400 text-purple-400 p-2 m-2 rounded-3xl";
    }
    
    if (quantity == 0){
        buttonReset = "m-2 bg-purple-400 text-purple-400 p-2 m-2 rounded-3xl";
    }

    return(
        <form className=" bg-white p-4 font-bold flex flex-col" onSubmit={handleSubmit}>
            <div className=" bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 
            justify-center flex items-center flex-col outline-2 shadow-lg shadow-purple-500 rounded-3xl p-5 m-5">


            <div className="text-center">
                <input className="p-3 text-center text-purple-600 shadow-lg shadow-purple-500 rounded-3xl" 
                type="text" value={itemName} onChange={handleItemNameChange} required placeholder="Click here to Add Item"></input>
            </div>
            
                
            
            <div className="p-3 text-purple-600 opacity-80 shadow-lg shadow-purple-500 rounded-2xl m-4">
                <select className={inputStyles} value={category} onChange={handleCategoryChange}>
                    <option disabled value="cat">Category</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Food">Canned Food</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
            <p className="text-center text-purple-600">Quantity: {quantity}</p>
            <div className="m-2 p-2 shadow-lg shadow-purple-500 border-1 rounded-2xl justify-center flex items-center">
            <button type="button" onClick={increment} className={buttonIncrement} >Increase Quantity</button>
            <button type="button" onClick={reset} className={buttonReset} disabled={quantity == 0}>Reset Quantity</button>
            <button type="button" onClick={decrement} className={buttonDecrement} disabled={quantity <= 1 }>Decrease Quantity</button>
            <button type="submit" className={buttonSubmit} onSubmit={handleSubmit}>Submit</button>
            </div>
            </div>
            </div>
        </form>
    )
}
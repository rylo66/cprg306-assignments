import { useState } from "react"

export default function NewItem(){

    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleItemNameChange = (event) => setItemName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault(); 

        let item = {
            name: itemName,
            quant: quantity,
            cat: category
        }
        console.log(item);
        alert(`Item name: ${item.name} Quantity: ${item.quant} Category: ${item.cat}`);

        setItemName(""),
        setQuantity(1),
        setCategory("Produce")
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

    let buttonIncrement = "m-2 bg-purple-400 text-pink-600 p-2 hover:bg-purple-800 cursor-pointer outline-1";
    let buttonDecrement = "m-2 bg-purple-400 text-pink-600 p-2 hover:bg-purple-800 cursor-pointer outline-1";
    let buttonReset = "m-2 bg-purple-400 text-pink-600 p-2 hover:bg-purple-800 cursor-pointer outline-1";
    let buttonSubmit = "m-2 bg-purple-400 text-pink-600 p-2 hover:bg-purple-800 cursor-pointer outline-1";
    let inputStyles = "text-center";

    if (quantity <= 1){
        buttonDecrement = "m-2 bg-purple-400 text-purple-400 p-2";
    }
    
    if (quantity == 0){
        buttonReset = "m-2 bg-purple-400 text-purple-400 p-2 ";
    }

    return(
        <form className="min-h-screen bg-gradient-to-r from-pink-400 via-green-600 to-pink-400 p-4 font-bold justify-center flex items-center flex-col" onSubmit={handleSubmit}>
            <div className=" bg-gradient-to-r from-purple-600 via-pink-300 to-purple-600 justify-center flex items-center flex-col outline-1">
            <p className="text-center mb-1 drop-shadow-lg text-7xl text-pink-400">Week-5 Assignment - Riley Yonda</p>

            <div className="p-5 text-center">
                <input className="text-center text-pink-600" type="text" value={itemName} onChange={handleItemNameChange} required placeholder="Click here to Add Item"></input>
            </div>
            
                
            
            <div className="text-pink-600 opacity-80">
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
            <p className="text-center text-pink-600 p-5">Quantity: {quantity}</p>
            <div className="m-2 p-2">
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
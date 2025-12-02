import { useState } from "react"

export default function NewItem(){

    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");

    const handleItemNameChange = (event) => setItemName(event.target.value);
    const handleQuantityChange = (event) => setQuantity(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const increment = () => {
        if(quantity <= 20){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if(quantity <= 20){
            setQuantity(quantity - 1);
        }
    }

    const reset = () => setQuantity(0);

    let buttonIncrement = "";
    let buttonDecrement = "";
    let buttonReset = "";

    if (quantity == 20){
        buttonIncrement = "bg-red-900 text-red-900 p-2 m-2";
    }
    else{
        buttonIncrement = "bg-red-900 p-2 active:bg-pink-600 hover:bg-blue-300 cursor-pointer transition-colors m-2 outline-1" ;
    }

    if (quantity <= 1){
        buttonDecrement = "bg-red-900 text-red-900 p-2 m-2 rounded-2x1";
    }
    else {
        buttonDecrement = "bg-red-900 p-2 active:bg-pink-600 hover:bg-blue-300 cursor-pointer transition-colors m-2 outline-1" ;
    }
    
    if (quantity == 0){
        buttonReset = "bg-purple-900 text-purple-900 p-2";
    }
    else {
        buttonReset = "bg-purple-900 text-white p-2 active:bg-pink-600 hover:bg-blue-300 cursor-pointer transition-colors outline-1"
    } 

    let buttonStyles= "min-h-screen bg-gradient-to-r from-red-200 via-red-500 to-red-900 p-4 font-bold justify-center flex items-center";

    return(
        <main className={buttonStyles}>
            <div className = "bg-gradient-to-r from-red-900 via-purple-400 to-red-900 outline-1 rounded-2xl">
            <h1 className="text-3xl mb-4 text-center text-white">Assignment Counter</h1>
            <p className="p-4 mb-2 text-center rounded-2xl">Current Count: {quantity}</p>
            <div className = "text-center ">
            <button onClick={increment} className={buttonIncrement} disabled={quantity == 20}>Increment Counter</button>
            <button onClick={reset} className={buttonReset} disabled={quantity == 0}>Reset Counter</button>
            <button onClick={decrement} className={buttonDecrement} disabled={quantity <= 1 }>Decrement Counter</button>
            </div>
            </div>
        </main>
    )
}
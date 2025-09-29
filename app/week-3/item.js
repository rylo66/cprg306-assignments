import Items from './item-list'; 

export default function Item(  {item} ){

    const {name, quantity, category} = item;

    return(
        <div className="bg-black m-2 p-2 rounded-lg">
            <h3 className="text-2xl text-white font-bold">Name: {name}</h3>
            <ul className="list-disc pl-4 pb-6 mt-2 text-center">
                <li className="font-light font-serif">Quantity: {quantity}</li>
                <li className="font-light font-serif">Category: {category}</li>
            </ul>
        </div>
    )
}
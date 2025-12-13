export default function Item({name, quantity, category}){

    return(
            <li className="list-none text-purple-600 m-1 p-5 rounded-3xl bg-white text-center outline-2 shadow-lg shadow-purple-500">
            <p className=" shadow-lg">Name: {name}</p>
            <p className=" shadow-lg ">Category: {category}</p>
            <p className=" shadow-lg">Quantity: {quantity}</p>
            </li>
    );
}
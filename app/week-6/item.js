

export default function Item({name, quantity, category}){

    return(
            <li className=" list-none text-emerald-100 m-2 p-4 rounded-3xl bg-gradient-to-r from-purple-900 via-purple-500 to-purple-200 opacity-70 text-center">
            <p className=" bg-purple-900 p-1 m-1 rounded-2xl">Name: {name}</p>
            <p className=" bg-purple-500 p-1 m-1 rounded-2xl">Category: {category}</p>
            <p className=" bg-purple-300 p-1 m-1 rounded-2xl">Quantity: {quantity}</p>
            </li>
    );
}
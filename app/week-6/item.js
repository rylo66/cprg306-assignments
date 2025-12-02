

export default function ItemConstruct({name, quantity, category}){

    return(
        <main>
            <div className=" text-emerald-100 m-2 p-4 rounded-3xl bg-gradient-to-r from-purple-900 via-purple-500 to-purple-200 opacity-70 text-center">
            <p className="border-1 bg-purple-900 p-1 m-1 rounded-2xl">Name: {name}</p>
            <p className="border-1 bg-purple-500 p-1 m-1 rounded-2xl">Category: {category}</p>
            <p className="border-1 bg-purple-300 p-1 m-1 rounded-2xl">Quantity: {quantity}</p>
            </div>
        </main>
    );
}

import Item from './item';      
import ItemList from './item-list';

export default function DisplayItems(){
    
    return(
        <main className="bg-amber-100">
            <h1 className="text-black font-bold text-center">Shopping List</h1>
        <ItemList/>
        </main>
    )
}
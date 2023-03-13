
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addFood} from "../features/customerSlice";

export default function CustomerCard({
    id,
    name,
    foods
}:{
    id: string,
    name: string,
    foods: string[]
}){
    const [foodInput, setFoodInput] = useState<string>("");
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{name}</h3>
            <ul>
                {foods.map(food => <li>{food}</li>)}
            </ul>

            <input value ={foodInput} onChange ={(e) => setFoodInput(e.target.value)}/>
            <button onClick={() => {
                dispatch(addFood({food: foodInput,id}));
                setFoodInput("");
            }}>Add foods</button>
        </div>
    )
}
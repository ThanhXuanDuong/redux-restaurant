import {useAppDispatch} from "../app/hooks/hooks";
import {removeReservation} from "../features/reservationSlice";
import {addCustomer} from "../features/customerSlice";
import { v4 as uuid } from "uuid";
export default function ReservationCard({
    name,
    index
}:{
    name:string,
    index: number
}){
    const dispatch = useAppDispatch();
    const onClick = () => {
        dispatch(removeReservation(index));
        dispatch(addCustomer({
            id: uuid(),
            name,
            foods:[]
        }));
    }

    return (
        <div onClick={onClick}>
            <h3>{name}</h3>
        </div>
    )
}
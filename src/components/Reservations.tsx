import ReservationCard from "./ReservationCard";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks/hooks";
import {addReservation} from "../features/reservationSlice";

export default function Reservations(){
    const [name, setName] = useState ("");

    const reservations = useAppSelector(state => state.reservation.value);
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(addReservation(name));
        setName("");
    }

    return (
        <>
            <h1>Reservations</h1>
            <input value={name} onChange = {(e) => setName(e.target.value)}/>
            <button onClick={onClick}>Add</button>
            <br/>
            {reservations &&
                reservations.map((name,index) =>
                    <ReservationCard name ={name} index={index}/>
                )
            }
        </>
    )
}
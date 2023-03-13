
import { useAppSelector} from "../app/hooks/hooks";
import CustomerCard from "./CustomerCard";

export default function Customers(){
    const customers = useAppSelector(state => state.customer.value);

    return (
        <>
            <h1>Customers</h1>

            {customers &&
                customers.map(customer =>
                    <CustomerCard id = {customer.id}
                                  name={customer.name}
                                  foods={customer.foods}
                    />
                )
            }
        </>
    )
}
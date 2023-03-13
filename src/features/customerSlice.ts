import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Customer} from "../types/Customer";

interface CustomerState {
    value: Customer[];
}

interface AddFoodToCustomer {
    food: string,
    id: string
}
const initialState: CustomerState = {
    value: []
}
export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers:{
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        addFood: (state, action: PayloadAction<AddFoodToCustomer>) => {
            state.value.forEach(customer =>
                customer.id === action.payload.id &&
                customer.foods.push(action.payload.food))
        }
    }
})

export const {addCustomer, addFood} =customerSlice.actions
export default customerSlice.reducer
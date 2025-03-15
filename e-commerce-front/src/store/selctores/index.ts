import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

 


const getCartQauntitySelctor =
    createSelector((state:RootState) => state.cart.items,
        (state) => {
            return Object.values(state).reduce(
                (accumulator, curentValue) => {
                    return accumulator + curentValue
                        
                },0
            );
        })


        export default getCartQauntitySelctor;
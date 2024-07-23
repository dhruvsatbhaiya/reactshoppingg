import { createContext } from "react";
import { items } from "../assets/Data";

export const Storecontext=createContext()

const StoreContext=(props)=>{

     const contextvalue={
        items
    }

   return(
    <Storecontext.Provider value={contextvalue}>
  {props.children}
    </Storecontext.Provider>
   )
}
export default StoreContext
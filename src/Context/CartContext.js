import { createContext, useEffect, useReducer, useState } from "react";


const inirialstate = {
    cartItem: []
}

const ReducerFunc = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                cartItem: [...state.cartItem, action.payload]
            }
        case 'empty':
            return {
                ...state,
                cartItem:[]
            }  
        case 'remove':
            
            return{
                ...state,
                cartItem:state.cartItem.filter((item)=>item._id !== action.payload),
            }      


    }


}

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ci, dispatch] = useReducer(ReducerFunc, inirialstate);
    useEffect(() => {
        console.log(ci.cartItem[0]?.name);

    }, [ci]);
    const [tot, settot] = useState(0);
    function gett() {
        const ip = ci.cartItem.reduce((a, c) => a + c.price * c.qty, 0);
        settot(ip);
    }



    const exist = (x) => {
        return (ci.cartItem.find(item => item._id === x._id));
    }


    const addi = (item) => {

        dispatch(
            {
                type: 'add',
                payload: item,
            }
        )

    }
    const empty =()=>{
        dispatch(
            {
                type:'empty'
            }
        )
    }
    const remove =(id)=>{
        dispatch(
            {
                type:'remove',
                payload:id,
            }
        )
    }




    return (
        <CartContext.Provider value={{ ci, addi, tot, gett,empty, remove,exist, cartItem: ci.cartItem }}>
            {children}
        </CartContext.Provider>
    )

};
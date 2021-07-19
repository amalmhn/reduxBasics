import { ActionTypes } from "../Constants/actionsTypes";

const initialState = {
    products:[],
    product:{},
}

export const productReducer = (state=initialState.products,action)=>{
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:action.payload};
        default:
            return state;
    }
};

export const selectedProductReducer = (state=initialState.product,action)=>{
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,product:action.payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
    default:
            return state;
    }
}

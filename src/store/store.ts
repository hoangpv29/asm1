
import { productReducer } from "@/reducers/Products"
import cartReducer from "@/reducers/Cart"
import {legacy_createStore as createStore , combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk" 
const rootReducer = combineReducers({
    cart :cartReducer,
    products:productReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))
// console.log(store.getState());

export default store
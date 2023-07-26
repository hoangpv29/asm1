import { produce } from "immer";

interface Product {
  id: number;
  name: string;
  quantity: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: any) => {
  return produce(state, (draftState) => {
    
    
    switch (action.type) {
      case "cart/add":
        if (action.payload) {
          const existProductIndex = draftState.items.findIndex(
            (item) => item.id === action.payload.id
          );
          if (existProductIndex === -1) {
            draftState.items.push(action.payload);
          } else {
            draftState.items[existProductIndex].quantity++;
          }
        }
        break;
      case "cart/increase":
        if (action.payload) {
          const foundProduct = draftState.items.find(
            (item) => item.id === action.payload
          );
          if (foundProduct) {
            foundProduct.quantity++;
          }
        }
        break;
      case "cart/decrease":
        if (action.payload) {
          const foundProduct = draftState.items.find(
            (item) => item.id === action.payload
          );
          if (foundProduct) {
            foundProduct.quantity--;
            if (foundProduct.quantity < 1) {
              const confirmDelete = window.confirm(
                "Bạn có chắc chắn muốn xóa?"
              );
              if (confirmDelete) {
                draftState.items = draftState.items.filter(
                  (item) => item.id !== foundProduct.id
                );
              } else {
                foundProduct.quantity = 1;
              }
            }
          }
        }
        break;
      default:
        break;
    }
  });
};

export default cartReducer;

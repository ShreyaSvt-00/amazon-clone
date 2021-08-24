// it plays the part of how to push the action or data in the data layer and how to add it to basket or how to delete it from basket
// reducer is always listening to the actions

export const initialState={
    basket:[],
    user:null
};


// selector
export const getBasketTotal= (basket) => 
   basket?.reduce((amount,item) => item.price + amount , 0);









const reducer=(state,action) => {
// console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],
            }

        case 'EMPTY_BASKET':
            return {
                ...state,
                baskey:[]
            }    
        case 'REMOVE_FROM_BASKET':
           const index=state.basket.findIndex(
               (basketItem) => basketItem.id ===action.id
           ); 
           let newBasket=[...state.basket];
           if(index >=0){
              newBasket.splice(index,1);
           }
           else{
               console.warn("Can't remove product (id:${action.id}) as its not in the basket")
           }

           return {
               ...state,
               basket:newBasket
           }

        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
           
        default:
               return state;
    }
}

export default reducer;


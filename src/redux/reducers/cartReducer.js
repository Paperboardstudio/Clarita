/**
 *
 * @file This file contains the cartReducer function, which is a reducer function that updates the state of the shopping cart.
 * @summary The cartReducer function is responsible for adding and removing items from the shopping cart.
 * @typedef {Object} State
 * @property {Object} selectedItems - The selected items in the shopping cart.
 * @property {Array} selectedItems.items - The items in the shopping cart.
 * @property {string} selectedItems.restaurantName - The name of the restaurant associated with the shopping cart.
 * @typedef {Object} Action
 * @property {string} type - The type of action being performed.
 * @property {Object} payload - The data associated with the action.
 * @property {boolean} payload.checkboxValue - The value of the checkbox indicating whether an item should be added or removed.
 * @property {string} payload.restaurantName - The name of the restaurant associated with the item being added or removed.
 * @property {Object} payload.name - The name of the item being added or removed.
 * @param {State} state - The current state of the shopping cart.
 * @param {Action} action - The action being performed on the shopping cart.
 * @returns {State} - The updated state of the shopping cart.
 */
let defaultState = {
    selectedItems: { items: [], restaurantName: '' }
};

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = { ...state };

            if (action.payload.checkboxValue) {
                console.log('ADD TO CART');

                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName
                };
            } else {
                console.log('REMOVE FROM CART');
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            item => item.name !== action.payload.name
                        )
                    ],
                    restaurantName: action.payload.restaurantName
                };
            }
            console.log(newState, '👉');
            return newState;
        }

        default:
            return state;
    }
};

export default cartReducer;

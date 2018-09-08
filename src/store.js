import createStore from "unistore";
import devtools    from 'unistore/devtools'

const initialState = {
  newItemValue: "",
  allItems: ["Security", "Pagar", "Fasum"]
};

export const store = process.env.NODE_ENV === 'production' ?  createStore(initialState) : devtools(createStore(initialState));

export const actions = store => ({
  setNewItemText: (_, newValue) => ({ newItemValue: newValue }),
  addItem: ({ newItemValue, allItems }) => ({
    allItems: allItems.concat([newItemValue]),
    newItemValue: ""
  }),
  clearItems: () => ({ allItems: [] })
});

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item: null,
    quantity: null,
    sizes: null,
  },
];
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.indexOf(action.payload) < 1) {
        return state.push(action);
      }
    },
    removeItem(state, action) {
      if (state.indexOf(action.payload) > -1) {
        return state.filter((item) => item !== action.payload);
      }
    },
    // filterApproved(state, action) {
    //   return (state.approved = state.orders.filter(
    //     (item) => item.status === 'pending'
    //   ));
    // },
    // filterDeclined(state, action) {
    //   return (state.declined = state.orders.filter(
    //     (item) => item.status === 'pending'
    //   ));
    // },
    // filterPending(state, action) {
    //   return (state.pending = state.orders.filter(
    //     (item) => item.status === 'pending'
    //   ));
    // },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;

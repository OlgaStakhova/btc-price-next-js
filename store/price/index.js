import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit'
import { addAction, deleteAction } from './actions';

const priceReducer = createReducer(null, {
   [addAction.type]: (state, action) => {
      return state = action.payload;
   },
   [deleteAction.type]: (state) => {
      return state = null;
   },
})

export const rootReducer = combineReducers({
   price: priceReducer,
})
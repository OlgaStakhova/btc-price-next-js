import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './price'
import { useSelector, useDispatch} from "react-redux";

const store = configureStore({
  reducer: rootReducer
})

// export type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector;
export const useAppDispatch= useDispatch;
export const getPrice = (state) => state.price;
export default store;
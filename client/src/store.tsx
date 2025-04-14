import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
// import chatSlice from "./slice/chatSlice";
import {  useDispatch, useSelector,TypedUseSelectorHook } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
  const store = configureStore({
    reducer: {
      user: userSlice,
      // chat: chatSlice,
    },
    
  });

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
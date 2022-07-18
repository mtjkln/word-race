import { configureStore } from "@reduxjs/toolkit";

import raceCartSlice from "./raceCartSlice";

const store = configureStore({ reducer: raceCartSlice.reducer });
export const raceCartSliceAction = raceCartSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

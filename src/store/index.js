import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createLogger } from "redux-logger";
import { dustApi } from "../api/DustList";
import bookmarkReducer from "./bookmarkReducer";
import selectData from "./selectData";

const logger = createLogger()

const rootReducer = combineReducers({
  selectData,
  bookmark: bookmarkReducer,
  [dustApi.reducerPath]:dustApi.reducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger, dustApi.middleware)
})
setupListeners(store.dispatch)

export default store  
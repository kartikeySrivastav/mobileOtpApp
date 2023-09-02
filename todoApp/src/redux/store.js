import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer, messageReducer } from "./reducer";

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	middleware: [thunk],
});

export default store;

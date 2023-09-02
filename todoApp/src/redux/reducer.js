import { createReducer } from "@reduxjs/toolkit";

import {
	loginRequest,
	loginSuccess,
	loginFailure,
	loadUserRequest,
	loadUserSuccess,
	loadUserFailure,
	clearError,
	clearMessage,
} from "./action/action";

const initialState = {
	loading: false,
	isAuthenticated: false,
	user: null,
	message: null,
	error: null,
};

export const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(loginRequest, (state) => {
			state.loading = true;
		})
		.addCase(loginSuccess, (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.message = action.payload.message;
		})
		.addCase(loginFailure, (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload;
		})
		.addCase(loadUserRequest, (state) => {
			state.loading = true;
		})
		.addCase(loadUserSuccess, (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
		})
		.addCase(loadUserFailure, (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload;
		})
		.addCase(clearError, (state) => {
			state.error = null;
		})
		.addCase(clearMessage, (state) => {
			state.message = null;
		});
});

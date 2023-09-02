import { createAction } from "@reduxjs/toolkit";

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginFailure = createAction("auth/loginFailure");
export const loadUserRequest = createAction("auth/loadUserRequest");
export const loadUserSuccess = createAction("auth/loadUserSuccess");
export const loadUserFailure = createAction("auth/loadUserFailure");
export const clearError = createAction("auth/clearError");
export const clearMessage = createAction("auth/clearMessage");

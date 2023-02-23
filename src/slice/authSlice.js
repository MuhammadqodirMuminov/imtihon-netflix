import { createSlice } from "@reduxjs/toolkit";
import { removeItem, setItem } from "../helpers/storage";

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
};

const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signUserStart: (state) => {
			state.isLoading = true;
		},

		signUserSuccess: (state, action) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = action.payload;
			setItem('token', action.payload.token)
		},

		signUSerFailore: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		logOutUSer: (state) => {
			state.user = null;
			state.loggedIn = false;
			removeItem('token')
		},
	},
});

export const { signUserStart, signUserSuccess, signUSerFailore, logOutUSer } =
	AuthSlice.actions;
export default AuthSlice.reducer;

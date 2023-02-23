import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	fovoriteCard: [],
	error: null,
};

const fovoriteSlice = createSlice({
	name: "fovorite",
	initialState,
	reducers: {
		fovoriteStart: (state) => {
			state.isLoading = true;
		},
		fovoriteSuccess: (state, action) => {
			state.isLoading = false;

			state.fovoriteCard = [...state.fovoriteCard, { ...action.payload }];
		},
		fovoriteFailore: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { fovoriteStart, fovoriteSuccess, fovoriteFailore } =
	fovoriteSlice.actions;
export default fovoriteSlice.reducer;

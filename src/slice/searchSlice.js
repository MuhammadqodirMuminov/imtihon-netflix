import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	isLoading: false,
	searchCard: [],
	error: null,
};

const SearchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		searchCardStart: (state) => {
			state.isLoading = true;
		},

		searchCardSuccess: (state, action) => {
			state.isLoading = false;

			state.searchCard = action.payload;
		},

		searchCardFailore: (state, action) => {
			state.isLoading = false;

			state.error = action.payload;
		},
	},
});

export const { searchCardStart, searchCardSuccess, searchCardFailore } =
	SearchSlice.actions;
export default SearchSlice.reducer;

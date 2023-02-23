import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	popular: [],
	topRated: [],
	latest: [],
	nowPlaying: [],
	topIN: [],
	singleCard: null,
	similarPost: null,
	searchCards: [],
	error: null,
};

const CardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		getCardsStart: (state) => {
			state.isLoading = true;
		},

		getCardsSuccess: (state, action) => {
			switch (action.payload.type) {
				case "popular":
					state.popular = action.payload.payload;

					break;
				case "topRated":
					state.topRated = action.payload.payload;
					state.topIN = action.payload.payload;
					break;
				case "latest":
					state.latest = action.payload.payload;

					break;

				case "now_playing":
					state.nowPlaying = action.payload.payload;

					break;
				default:
					return state;
			}
			
    },
    
   

		getCardsFailore: (state, action) => {
			state.isLoading = false;

			state.error = action.payload;
		},

		getSingleCardStart: (state) => {
			state.isLoading = true;
		},

		getSingleCardSuccess: (state, action) => {
			state.isLoading = false;

			state.singleCard = action.payload;
		},

		getSingleCardFailore: (state, action) => {
			state.isLoading = false;

			state.error = action.payload;
		},

		searchCardsStart: (state) => {
			state.isLoading = true;
		},

		searchCardsSuccess: (state, action) => {
			state.isLoading = false;

			state.searchCards = action.payload;
		},

		searchcardsFailore: (state, action) => {
			state.isLoading = false;

			state.error = action.payload;
		},
	},
});

export const {

	searchCardsStart,
	searchCardsSuccess,
	searchcardsFailore,
	getCardsStart,
	getCardsSuccess,
	getCardsFailore,
	getSingleCardStart,
	getSingleCardSuccess,
	getSingleCardFailore,
	getsimilarCardSuccess,
} = CardsSlice.actions;
export default CardsSlice.reducer;

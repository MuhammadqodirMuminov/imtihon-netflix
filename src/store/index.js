import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/authSlice";
import CardsReducer from "../slice/cardsSlice";
import SearchReducer from "../slice/searchSlice";
import FovoriteReducer from "../slice/fovoriteSlice";

export const store = configureStore({
	reducer: {
		cards: CardsReducer,
		auth: AuthReducer,
		search: SearchReducer,
		fovorite: FovoriteReducer,
	},

	devTools: process.env.NODE_ENV !== "production",
});

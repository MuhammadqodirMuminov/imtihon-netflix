import { Alert } from "@mui/material";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
	const { error } = useSelector((state) => state.auth);

	const errorMessage = useCallback(() => {
		return Object.keys(error).map((name) => {
			const msg = error[name].join(", ");
			return `${name} ${msg}`;
		});
	}, [error]);

	return (
		error !== null &&
		errorMessage().map((error,i) => <Alert key={i} style={{marginBottom: '10px'}} severity="error">{error}</Alert>)
	);
};

export default ValidationError;

import React from "react";

const Input = ({ className, type = "text", state, setState, placeholder }) => {
	return (
		<>
			<input
				className={className}
				type={type}
				placeholder={placeholder}
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
		</>
	);
};

export default Input;

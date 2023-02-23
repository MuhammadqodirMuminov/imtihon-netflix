export const setItem = (key, value) => {
	try {
		localStorage.setItem(key, value);
	} catch (error) {
		console.log(`An error occurred while setting Token ${error}`);
	}
};

export const GetItem = (key) => {
	try {
		return localStorage.getItem(key);
	} catch (error) {
		console.log(`An error occurred while setting Token ${error}`);
	}
};

export const removeItem = (key) => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.log(`An error occurred while setting Token ${error}`);
	}
};

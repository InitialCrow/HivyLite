export const takeProduct = (search) => {
	console.log('I search', search);
	return {
		type: "SELECTED_PRODUCT",
		payload: search
	}
}
export const takeRequest = (search) => {
	console.log('I searchs', search);
	return {
		type: "SELECTED_REQUEST",
		payload: search
	}
}

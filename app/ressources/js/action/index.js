export const takeProduct = (search) => {
	console.log('I search', search);
	return {
		type: "SELECTED_PRODUCT",
		payload: search
	}
}

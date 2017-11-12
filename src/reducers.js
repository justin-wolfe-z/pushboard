const initialState = {
	account:"justin.wolfe@gmail.com",
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "CLICK_BUTTON":
			return state
		default:
			return state
	}
}

export default reducer
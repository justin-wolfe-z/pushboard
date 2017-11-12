const initialState = {
	account:"justin.wolfe@gmail.com",
	buttons: [
		"button1": {
			"icon":"baby",
			"hookURL":"hookURL"
		},
		"button2": {
			"icon":"dog",
		}
	],
	isFetching: false,
	isLoggedIn: false,
	view: "board"
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "CLICK_BUTTON":
			return state
		case "LOG_IN":
			return Object.assign({}, state, {
        loggedIn: true
      })
		default:
			return state
	}
}

export default reducer
const initialState = {
	account:"justin.wolfe@gmail.com",
	buttons: [
		{
			icon:"baby",
			text:"",
			hookURL:"hookURL"
		},
		{
			icon:"hat",
			text:"",
			hookURL:"hookURLLL",
		},
		{
			icon:"puppy",
			text:"",
			hookURL:"hookURLLL",
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
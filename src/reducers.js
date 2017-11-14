import initialState from './data/initial_store'

const reducer = (state = initialState, action) => {
	console.log(action);
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
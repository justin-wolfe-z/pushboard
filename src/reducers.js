import initialState from './data/initial_store'

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "CLICK_BUTTON":
			return state
		case "LOG_IN":
			return Object.assign({}, state, {
        loggedIn: true
      })
    case "TO_EDITOR":
    	return Object.assign({}, state, {
    		screen: "Editor",
    		selectedButton: state.buttons[action.buttonID]
    	})  
		default:
			return state
	}
}

export default reducer
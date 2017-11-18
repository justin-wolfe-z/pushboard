import initialState from './data/initial_store'

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "CLICK_BUTTON":
			return state
		case "LOGIN_SUCCESS":
			return Object.assign({}, state, {
            loggedIn: true
        })
        case "TO_EDITOR":
        	return Object.assign({}, state, {
        		screen: "Editor",
        		selectedButton: state.buttons[action.buttonID]
        	})  
      	case "TO_PUSHBOARD":
        	return Object.assign({}, state, {
        		screen: "Pushboard",
        		selectedButton: null
        	})    
        case "TOGGLE_EDIT_SELECT":
        	return Object.assign({}, state, {
        		screen: "Pushboard",
        		isSelecting: !state.isSelecting
        	})      			
		default:
			return state
	}
}

export default reducer
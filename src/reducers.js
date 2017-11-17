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
  	case "TO_PUSHBOARD":
    	return Object.assign({}, state, {
    		screen: "Pushboard",
    		selectedButton: null
    	})    
    case "TO_EDIT_SELECT":
    	return Object.assign({}, state, {
    		screen: "Pushboard",
    		isSelecting: true
    	})      			
		default:
			return state
	}
}

export default reducer
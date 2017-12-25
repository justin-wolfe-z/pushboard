import initialState from './data/initial_store'

const reducer = (state = initialState, action) => {
	switch(action.type) {
        case "ACCOUNT_PROGRESS":
            return Object.assign({}, state, {
                isFetching: true,
                screen: 'Splash'
        })                
		case "ACCOUNT_SUCCESS":
			return Object.assign({}, state, {
                email: action.data.email,
                key: action.data.key,
                buttons: action.data.buttons,
                isFetching: false,    
                loggedIn: true,
                screen: 'Pushboard'
        })
        case "ACCOUNT_ERROR":
            return Object.assign({}, state, {
                isFetching: false,    
                loggedIn: true,
                splashText: 'Error logging in: ' + action.text,
                screen: 'Splash',
                previousScreen: 'Login'
        })
        case "SAVE_SUCCESS":
            return Object.assign({}, state, {
                buttons:action.button.body
        })        
        case "TO_EDITOR":
        	return Object.assign({}, state, {
        		screen: "Editor",
        		selectedButton: state.buttons[action.buttonID]
        	})  
      	case "TO_PUSHBOARD":
        	return Object.assign({}, state, {
        		screen: "Pushboard",
        		selectedButton: null,
                isSelecting: false
        	})    
        case "TOGGLE_EDIT_SELECT":
        	return Object.assign({}, state, {
        		screen: "Pushboard",
        		isSelecting: !state.isSelecting
        	}) 
        case "TO_PREV_SCREEN":
            return Object.assign({}, state, {
                screen: state.previousScreen,
            })                   			
		default:
			return state
	}
}

export default reducer
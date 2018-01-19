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
                screen: 'Pushboard',
                connectionStatus: 'connected'
            })
        case "ACCOUNT_ERROR":
            return Object.assign({}, state, {
                isFetching: false,    
                loggedIn: false,
                splashText: 'Error logging in: ' + action.text,
                screen: 'Splash',
                previousScreen: 'Login'
            })
        case "ACCOUNT_NEW":
            return Object.assign({}, state, {
                isFetching: false,    
                loggedIn: false,
                splashText: action.text,
                screen: 'Splash',
                previousScreen: 'Login'
            })
        case "SAVE_SUCCESS":
            return Object.assign({}, state, {
                buttons:action.button.body
            })
        case "PUSH_ERROR":
            return Object.assign({}, state, {
                screen: "Splash",
                splashText: action.text,
                previousScreen: "Pushboard"
            })                    
        case "TO_EDITOR":
        	return Object.assign({}, state, {
        		screen: "Editor",
        		selectedButton: action.button
        	})
        case "RESET_KEY_SUCCESS":
            return Object.assign({}, state, {
                screen: "Splash",
                splashText: action.data.message,
                selectedButton: null,
                email: null,
                key: null,
                buttons: null,
                previousScreen: "Login"
            })             
        case "TO_LOGIN":
            return Object.assign({}, state, {
                screen: "Login",
                selectedButton: null,
                email: null,
                key: null,
                buttons: null
            })            
        case "TO_SETTINGS":
            return Object.assign({}, state, {
                screen: "Settings",
                previousScreen: "Pushboard"
            })                
      	case "TO_PUSHBOARD":
        	return Object.assign({}, state, {
        		screen: "Pushboard",
        		selectedButton: null,
                isSelecting: false
        	})
        case "TO_DYNAMIC":
            return Object.assign({}, state, {
                screen: "Dynamic",
                selectedButton: action.button,
                previousScreen: "Pushboard"
            })           
        case "TOGGLE_EDIT_SELECT":
        	return Object.assign({}, state, {
        		screen: "Pushboard",
        		isSelecting: !state.isSelecting
        	}) 
        case "TO_PREV_SCREEN":
            return Object.assign({}, state, {
                screen: state.previousScreen,
                splashText: ''
            })                   			
		default:
			return state
	}
}

export default reducer
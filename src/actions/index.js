import { URLs } from '../data/shared_constants'

export const CLICK_BUTTON = 'CLICK_BUTTON'
export const clickButton = (target) => {
	return {type: CLICK_BUTTON, target}
}

export const LOG_IN = 'LOG_IN'
export const logIn = (text) => {
	return {type: LOG_IN, text}
}

//LOGIN
//thunk for loading user data (with fake API right now)
export const LOGIN_THUNK = 'LOGIN_THUNK'
export const loginThunk = (auth) => {
	return (dispatch) => {
		console.log(auth);
		dispatch(logIn())
		dispatch(loginProgress())
		let fetchSet = {
			method:'GET',
			headers: {
				'Accept': 'application/json',
			  'Authorization': auth,
		  	'Content-Type': 'application/json'
			}
		}
		console.log(fetchSet)
		fetch(URLs.base + URLs.route.login[1],fetchSet)
    .then(response => response.json()
	  	.then(data => {
	  		console.log(data);
				dispatch(loginSuccess(data));
	  	})
  	)
  	.catch(error => {
  		dispatch(loginError(error))
  	})
	}
}

export const LOGIN_PROGRESS = 'LOGIN_PROGRESS'
export const loginProgress = (text) => {
	return {type: LOGIN_PROGRESS, text}
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess= (text) => {
	return {type: LOGIN_SUCCESS, text}
}

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const loginError = (text) => {
	return {type: LOGIN_ERROR, text}
}

//PUSH
//thunk for using button pushes to trigger Zaps
export const PUSH_THUNK = 'PUSH_THUNK'
export const pushThunk = (text) => {
	/*return (dispatch) => {
		dispatch(loginProgress());
		fetch(loginURL)
    .then(response => response.json()
	  	.then(data => {
	  		console.log(data.message);
				dispatch(loginSuccess(data.message.hound));
	  	})
  	)
	}*/
}

export const PUSH_PROGRESS = 'PUSH_PROGRESS'
export const pushProgress = (text) => {
	return {type: PUSH_PROGRESS, text}
}

export const PUSH_SUCCESS = 'PUSH_SUCCESS'
export const pushSuccess= (text) => {
	return {type: PUSH_SUCCESS, text}
}

export const PUSH_ERROR = 'PUSH_ERROR'
export const pushError = (text) => {
	return {type: PUSH_ERROR, text}
}

//MOTION
//toggle whether pushing buttons on the board sends to the editor
export const TOGGLE_EDIT_SELECT = 'TOGGLE_EDIT_SELECT'
export const toggleEditSelect = () => {
	return {type: TOGGLE_EDIT_SELECT}
}

//action for moving to the editor for a particular button from the pushboard
export const TO_EDITOR = 'TO_EDITOR'
export const toEditor = (buttonID) => {
	return {type: TO_EDITOR, buttonID}
}

//action for moving to the pushboard
export const TO_PUSHBOARD = 'TO_PUSHBOARD'
export const toPushboard = () => {
	return {type: TO_PUSHBOARD}
}

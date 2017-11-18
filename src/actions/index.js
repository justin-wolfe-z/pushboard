import { loginURL } from '../data/shared_constants'

export const CLICK_BUTTON = 'CLICK_BUTTON'
export const clickButton = (target) => {
	return {type: CLICK_BUTTON, target}
}

export const LOG_IN = 'LOG_IN'
export const logIn = (text) => {
	return {type: LOG_IN, text}
}

//thunk for loading user data (with fake API right now)
export const LOGIN_THUNK = 'LOGIN_THUNK'
export const loginThunk = (text) => {
	return (dispatch) => {
		dispatch(loginProgress());
		fetch(loginURL)
    .then(response => response.json()
	  	.then(data => {
	  		console.log(data.message);
				dispatch(loginSuccess(data.message.hound));
	  	})
  	)
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

//action for moving to the editor for a particular button from the pushboard
export const TO_EDITOR = 'TO_EDITOR'
export const toEditor = (buttonID) => {
	return {type: TO_EDITOR, buttonID}
}

export const TOGGLE_EDIT_SELECT = 'TOGGLE_EDIT_SELECT'
export const toggleEditSelect = () => {
	return {type: TOGGLE_EDIT_SELECT}
}


export const TO_PUSHBOARD = 'TO_PUSHBOARD'
export const toPushboard = () => {
	return {type: TO_PUSHBOARD}
}

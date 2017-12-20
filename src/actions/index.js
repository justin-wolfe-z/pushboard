import {fetchPrep} from '../data/shared_constants'

export const CLICK_BUTTON = 'CLICK_BUTTON'
export const clickButton = (button) => {
	return (dispatch) => {
		console.log(button)
	}
}

export const ACCOUNT_START = 'ACCOUNT_START'
export const accountStart = (text) => {
	return {type: ACCOUNT_START, text}
}

//LOGIN
//thunk for loading user data (with fake API right now)
export const ACCOUNT_THUNK = 'ACCOUNT_THUNK'
export const accountThunk = (type, auth) => {
	return (dispatch) => {
		dispatch(accountStart())
		dispatch(accountProgress())
		let request = fetchPrep(type, auth)
		fetch(request.url, request.settings)
    	.then(response => response.json())
	  	.then(data => {
	  		if(data.status==="new"){
	  			dispatch(accountSuccess(data.body))
	  		} else if(data.status==="existing"){
					dispatch(accountSuccess(data.body))
	  		} else if (data.status==="error"){
	  			dispatch(accountError(data.message))
	  		}
			})
  		.catch(error => {
  			dispatch(accountError(error))
  		})
	}
}

export const ACCOUNT_PROGRESS = 'ACCOUNT_PROGRESS'
export const accountProgress = (text) => {
	return {type: ACCOUNT_PROGRESS, text}
}

export const ACCOUNT_SUCCESS = 'ACCOUNT_SUCCESS'
export const accountSuccess= (data) => {
	return {type: ACCOUNT_SUCCESS, data}
}

export const ACCOUNT_ERROR = 'ACCOUNT_ERROR'
export const accountError = (text) => {
	return {type: ACCOUNT_ERROR, text}
}

//PUSH
//thunk for using button pushes to trigger Zaps
export const PUSH_THUNK = 'PUSH_THUNK'
export const pushThunk = (button) => {
	return (dispatch,getState) => {
		dispatch(pushStart())
		dispatch(pushProgress())
		let auth = getState().email + ":" + getState().key
		let request = fetchPrep("push", auth, JSON.stringify(button))
		fetch(request.url, request.settings)
    	.then(response => response.json())
	  	.then(data => dispatch(pushSuccess(data)))
  		.catch(error => dispatch(pushError(error)))
	}
}

export const PUSH_START = 'PUSH_START'
export const pushStart = (text) => {
	return {type: PUSH_START, text}
}

export const PUSH_PROGRESS = 'PUSH_PROGRESS'
export const pushProgress = (text) => {
	return {type: PUSH_PROGRESS, text}
}

export const PUSH_SUCCESS = 'PUSH_SUCCESS'
export const pushSuccess= (data) => {
	return {type: PUSH_SUCCESS, data}
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

export const TO_PREV_SCREEN = 'TO_PREV_SCREEN'
export const toPrevScreen = () => {
	return {type: TO_PREV_SCREEN}
}

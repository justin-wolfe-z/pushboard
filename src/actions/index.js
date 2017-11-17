export const CLICK_BUTTON = 'CLICK_BUTTON'
export const clickButton = (target) => {
	return {type: CLICK_BUTTON, target}
}

export const LOG_IN = 'LOG_IN'
export const logIn = (text) => {
	return {type: LOG_IN, text}
}

//thunk for loading user data (with fake API right now)
export const LOAD_THUNK = 'LOAD_THUNK'
export const loadThunk = (text) => {
	return (dispatch) => {
		dispatch(loading());
		fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json()
	  	.then(data => {
	  		console.log(data.message);
				dispatch(loaded(data.message.hound));
	  	})
  	)
	}
}

export const LOADING = 'LOADING'
export const loading = (text) => {
	return {type: LOADING, text}
}

export const LOADED = 'LOADED'
export const loaded = (text) => {
	return {type: LOADED, text}
}

//action for moving to the editor for a particular button from the pushboard
export const TO_EDITOR = 'TO_EDITOR'
export const toEditor = (buttonID) => {
	return {type: TO_EDITOR, buttonID}
}

export const TO_PUSHBOARD = 'TO_PUSHBOARD'
export const toPushboard = () => {
	return {type: TO_PUSHBOARD}
}

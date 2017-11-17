export const CLICK_BUTTON = 'CLICK_BUTTON'
export const clickButton = (target) => {
	return {type: CLICK_BUTTON, target}
}

export const LOG_IN = 'LOG_IN'
export const logIn = (text) => {
	return {type: LOG_IN, text}
}

export const LOAD_THUNK = 'LOAD_THUNK'
export const loadThunk = (text) => {
	return (dispatch) => {
		dispatch(loading());
		fetch("https://dog.ceo/api/breeds/list/all")
		    .then(response => response.json().then((data) => {
		    	console.log(data.message);
    			dispatch(loaded());
		    }))
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
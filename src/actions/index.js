//action types
export const CLICK_BUTTON = 'CLICK_BUTTON'
export const clickButton = (text) => {
	return {type: CLICK_BUTTON, text}
}

export const LOG_IN = 'LOG_IN'
export const logIn = (text) => {
	return {type: LOG_IN, text}
}
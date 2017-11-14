export const CLICK_BUTTON = 'CLICK_BUTTON'
export const clickButton = (target) => {
	return {type: CLICK_BUTTON, target}
}

export const LOG_IN = 'LOG_IN'
export const logIn = (text) => {
	return {type: LOG_IN, text}
}
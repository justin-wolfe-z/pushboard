//action types
export const CLICK_BUTTON = 'CLICK_BUTTON'

//action creators

export const clickButton = (text) => {
	return {type: CLICK_BUTTON, text}
}
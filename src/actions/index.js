import {fetchPrep} from '../data/shared_constants'

export const ACCOUNT_START = 'ACCOUNT_START'
export const accountStart = (text) => {
	return {type: ACCOUNT_START, text}
}

//STORAGE
//thunks for saving creds to local storage and retrieving them at application start

export const STORAGE_THUNK = 'STORAGE_THUNK'
export const storageThunk = (type) => {
	return (dispatch) => {
		switch (type){
			case "save":
				break;
			case "load":
				console.log("load");
				break;
			default:
				break;		
		}
	}
}

export const STORAGE_SAVE_PROGRESS = 'STORAGE_SAVE_PROGRESS'
export const storageSaveProgress = (text) => {
	return {type: STORAGE_SAVE_PROGRESS, text}
}

export const STORAGE_SAVE_SUCCESS = 'STORAGE_SAVE_SUCCESS'
export const storageSaveSuccess= (text) => {
	return {type: STORAGE_SAVE_SUCCESS, text}
}

export const STORAGE_SAVE_ERROR = 'STORAGE_SAVE_ERROR'
export const storageSaveError = (text) => {
	return {type: STORAGE_SAVE_ERROR, text}
}

export const STORAGE_LOAD_PROGRESS = 'STORAGE_LOAD_PROGRESS'
export const storageLoadProgress = (text) => {
	return {type: STORAGE_LOAD_PROGRESS, text}
}

export const STORAGE_LOAD_SUCCESS = 'STORAGE_LOAD_SUCCESS'
export const storageLoadSuccess= (text) => {
	return {type: STORAGE_LOAD_SUCCESS, text}
}

export const STORAGE_LOAD_ERROR = 'STORAGE_LOAD_ERROR'
export const storageLoadError = (text) => {
	return {type: STORAGE_LOAD_ERROR, text}
}


//LOGIN
//thunk for loading user data
export const ACCOUNT_THUNK = 'ACCOUNT_THUNK'
export const accountThunk = (type, email, key) => {
	return (dispatch) => {
		dispatch(accountStart())
		dispatch(accountProgress())
		let auth = key ? email + ":" + key : email
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
	return (dispatch, getState) => {
		dispatch(pushStart())
		dispatch(pushProgress())
		let auth = getState().email + ":" + getState().key
		let request = fetchPrep("push", auth, button)
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

export const SAVE_THUNK = 'SAVE_THUNK'
export const saveThunk = (button) => {
	return (dispatch, getState) => {
		dispatch(saveStart())
		dispatch(saveProgress())
		let auth = getState().email + ":" + getState().key
		let request = fetchPrep("save", auth, button)
		fetch(request.url, request.settings)
    	.then(response => response.json())
	  	.then(data => {
	  		dispatch(saveSuccess(data))
	  		dispatch(toPushboard())
	  	})
  		.catch(error => dispatch(saveError(error)))			
	}
}

export const SAVE_START = 'SAVE_START'
export const saveStart = (text) => {
	return {type: SAVE_START, text}
}

export const SAVE_PROGRESS = 'SAVE_PROGRESS'
export const saveProgress = (text) => {
	return {type: SAVE_PROGRESS, text}
}

export const SAVE_SUCCESS = 'SAVE_SUCCESS'
export const saveSuccess= (button) => {
	return {type: SAVE_SUCCESS, button}
}

export const SAVE_ERROR = 'SAVE_ERROR'
export const saveError = (text) => {
	return {type: SAVE_ERROR, text}
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

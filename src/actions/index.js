import {fetchPrep} from '../data/utils'
import qs from 'qs'

export const ACCOUNT_START = 'ACCOUNT_START'
export const accountStart = (text) => {
	return {type: ACCOUNT_START, text}
}

//QUERY
//check query string for account params
export const QUERY_THUNK = 'QUERY_THUNK'
export const queryThunk = (q) => {
	return (dispatch) => {
		if(typeof q === 'string'){
			let decoded = decodeURIComponent(q);
    	let query = qs.parse(decoded.slice(1));
    	if(query.email && query.key){
	    	dispatch(querySuccess())
	    	dispatch(accountThunk('login', query.email, query.key))
    	} else {
    		dispatch(queryError("required account params not present in query string"))
    	}
		} else {
			dispatch(queryError("no query string"))
			dispatch(storageThunk('load'))
		}
	}
}

export const QUERY_PROGRESS = 'QUERY_PROGRESS'
export const queryProgress = (text) => {
	return {type: QUERY_PROGRESS, text}
}

export const QUERY_SUCCESS = 'QUERY_SUCCESS'
export const querySuccess= (text) => {
	return {type: QUERY_SUCCESS, text}
}

export const QUERY_ERROR = 'QUERY_ERROR'
export const queryError = (text) => {
	return {type: QUERY_ERROR, text}
}

//STORAGE
//thunks for saving creds to local storage and retrieving them at application start
export const STORAGE_THUNK = 'STORAGE_THUNK'
export const storageThunk = (type, email, key) => {
	return (dispatch) => {
		switch (type){
			case "save":
				dispatch(storageSaveProgress())
				let toStore = {email: email, key: key}
				localStorage.setItem('creds', JSON.stringify(toStore))
				localStorage.getItem('creds') ? dispatch(storageSaveSuccess()) : dispatch(storageSaveError())
				break;
			case "load":
				dispatch(storageLoadProgress())
				let creds = localStorage.getItem('creds')
				if(creds){
					let parsed = JSON.parse(creds)
					dispatch(storageLoadSuccess())
					dispatch(accountThunk('login', parsed.email, parsed.key))
				} else {
					dispatch(storageLoadError("didn't find creds in local storage"))
				}
				break;
			case "remove":
				localStorage.removeItem('creds')
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

export const STORAGE_REMOVE_PROGRESS = 'STORAGE_REMOVE_PROGRESS'
export const storageRemoveProgress = (text) => {
	return {type: STORAGE_REMOVE_PROGRESS, text}
}

export const STORAGE_REMOVE_SUCCESS = 'STORAGE_REMOVE_SUCCESS'
export const storageRemoveSuccess= (text) => {
	return {type: STORAGE_REMOVE_SUCCESS, text}
}

export const STORAGE_REMOVE_ERROR = 'STORAGE_REMOVE_ERROR'
export const storageRemoveError = (text) => {
	return {type: STORAGE_REMOVE_ERROR, text}
}

//LOGIN/SIGNUP
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
	  			dispatch(accountNew("Thanks for signing up for Tap! Check your email and click the link to open your account."))
	  		} else if(data.status==="existing"){
	  			if(type==="login"){
	  				dispatch(storageThunk('save', email, key))
	  			}
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

export const ACCOUNT_NEW = 'ACCOUNT_NEW'
export const accountNew= (text) => {
	return {type: ACCOUNT_NEW, text}
}

export const ACCOUNT_ERROR = 'ACCOUNT_ERROR'
export const accountError = (text) => {
	return {type: ACCOUNT_ERROR, text}
}

//PUSH
//thunk for using button pushes to trigger Zaps
export const PUSH_THUNK = 'PUSH_THUNK'
export const pushThunk = (button, dynamic) => {
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

//SAVE
//thunk for saving changes to buttons
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

export const LOG_OUT_THUNK = 'LOG_OUT_THUNK'
export const logOutThunk = (text) => {
	return (dispatch) => {
		dispatch(storageThunk("remove"))
		window.location.search = ""
		dispatch(logOutSuccess())
		dispatch(toLogin())
	}
}

export const LOG_OUT_PROGRESS = 'LOG_OUT_PROGRESS'
export const logOutProgress = (text) => {
	return {type: LOG_OUT_PROGRESS, text}
}

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const logOutSuccess= (text) => {
	return {type: LOG_OUT_SUCCESS, text}
}

export const LOG_OUT_ERROR = 'LOG_OUT_ERROR'
export const logOutError = (text) => {
	return {type: LOG_OUT_ERROR, text}
}

//MOTION/NAVIGATION
export const TOGGLE_EDIT_SELECT = 'TOGGLE_EDIT_SELECT'
export const toggleEditSelect = () => {
	return {type: TOGGLE_EDIT_SELECT}
}

export const TO_EDITOR = 'TO_EDITOR'
export const toEditor = (button) => {
	return {type: TO_EDITOR, button}
}

export const TO_LOGIN = 'TO_LOGIN'
export const toLogin = (button) => {
	return {type: TO_LOGIN, button}
}

export const TO_PUSHBOARD = 'TO_PUSHBOARD'
export const toPushboard = () => {
	return {type: TO_PUSHBOARD}
}

export const TO_SETTINGS = 'TO_SETTINGS'
export const toSettings = () => {
	return {type: TO_SETTINGS}
}

export const TO_DYNAMIC = 'TO_DYNAMIC'
export const toDynamic = (button) => {
	return {type: TO_DYNAMIC, button}
}

export const TO_PREV_SCREEN = 'TO_PREV_SCREEN'
export const toPrevScreen = () => {
	return {type: TO_PREV_SCREEN}
}

export const CLEAR_SPLASH = 'CLEAR_SPLASH'
export const clearSplash = () => {
	return {type: CLEAR_SPLASH}
}

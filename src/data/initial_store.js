const initialState = {
	email:null,
	key:null,
	connectionStatus:"disconnected",
	buttons: [],
	log: [],
	isFetching: false,
	isSelecting: false,
	isLoggedIn: false,	
	selectedButton: null,
	splashText: 'Loading',
	screen: "Login",
	previousScreen: "Login"
}

export default initialState
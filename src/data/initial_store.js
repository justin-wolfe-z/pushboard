const initialState = {
	email:"notanemail@zapier.com",
	key:"jlfsdkljdfsljjklfds",
	connectionStatus:"connected",
	buttons: [
		{
			id:0,
			icon:"baby",
			type:"static",
			connected:"false",
			text:"",
			hookURL:"hookURL"
		},
		{
			id:1,
			icon:"hat",
			type:"static",
			connected:"false",
			text:"",
			hookURL:"hookURLLL",
		},
		{
			id:2,
			icon:"puppy",
			type:"static",
			connected:"false",
			text:"",
			hookURL:"hookURLLL",
		},
		{
			id:3,
			icon:"cookie",
			type:"static",
			connected:"false",
			text:"",
			hookURL:"hookURLLL",
		}
	],
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
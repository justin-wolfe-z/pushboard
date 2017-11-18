const initialState = {
	account:"justin.wolfe@gmail.com",
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
	isFetching: false,
	isSelecting: false,
	selectedButton: null,
	isLoggedIn: false,
	screen: "Login"
}

export default initialState
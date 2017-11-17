const initialState = {
	account:"justin.wolfe@gmail.com",
	buttons: [
		{
			id:1,
			icon:"baby",
			type:"static",
			connected:"false",
			text:"",
			hookURL:"hookURL"
		},
		{
			id:2,
			icon:"hat",
			type:"static",
			connected:"false",
			text:"",
			hookURL:"hookURLLL",
		},
		{
			id:3,
			icon:"puppy",
			type:"static",
			connected:"false",
			text:"",
			hookURL:"hookURLLL",
		},
		{
			id:4,
			icon:"cookie",
			type:"static",
			connected:"false",
			text:"",
			hookURL:"hookURLLL",
		}
	],
	isFetching: false,
	isSelecting: false,
	isLoggedIn: false,
	screen: "Login"
}

export default initialState
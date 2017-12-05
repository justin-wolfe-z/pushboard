export const URLs = {
	base:'http://192.168.0.107:4000',
	route:{
		login:['GET','/user'],
		signup:['POST','/user'],
		reset:['POST','/reset'],
		push:['POST','PUSH'],
		save:['POST','SAVE'],
		quit:['POST','QUIT']
	}
}

//fake API data for mocking stuff up until I set up a server 
export const fakeLoginSuccess = {
	status:"success",
	type:"login",
	email:"justin.wolfe@gmail.com",
	key:"fakdfjdfkfjdkfjdkfdj",
	buttons:[]
}
export const fakeLoginError = {
	status:"error",
	message:"error logging in"
}
export const fakePushSuccess = {
	status:"success",
	message:"successful push"
}
export const fakePushError = {
	status:"error",
	message:"error pushing"
}



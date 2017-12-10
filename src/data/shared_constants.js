export const URLs = {
	base:'http://192.168.0.105:4000',
	route:{
		login:['GET','/user'],
		signup:['POST','/user'],
		reset:['POST','/reset'],
		push:['POST','PUSH'],
		save:['POST','SAVE'],
		quit:['POST','QUIT']
	}
}

export const fetchSettings = (auth) => {
	return {
		method:'GET',
		headers: {
			'Accept': 'application/json',
		  'Authorization': auth,
	  	'Content-Type': 'application/json'
		}
	}
}



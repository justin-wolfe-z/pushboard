export const URLs = {
	base:'http://192.168.0.105:4000',
	route:{
		login:['GET','/user'],
		signup:['POST','/user'],
		reset:['POST','/reset'],
		push:['POST','/push'],
		save:['POST','/save'],
		quit:['POST','/quit']
	}
}

export const fetchPrep = (route, auth) => {
	return {
		url : URLs.base + URLs.route[route][1],
		settings: {
		method:URLs.route[route][0],
		headers: {
			'Accept': 'application/json',
		  'Authorization': auth,
	  	'Content-Type': 'application/json'
		}
	}
}
}


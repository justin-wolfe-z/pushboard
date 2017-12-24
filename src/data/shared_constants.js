export const URLs = {
	base: 'http://192.168.0.114:4000',
	route: {
		login: ['GET','/user'],
		signup: ['POST','/user'],
		reset: ['POST','/reset'],
		push: ['POST','/push'],
		save: ['POST','/save'],
		quit: ['POST','/quit']
	}
}

//prep an object to use for fetch requests to server
export const fetchPrep = (route, auth, body) => {
	return {
		url: URLs.base + URLs.route[route][1],
		settings: {
			method: URLs.route[route][0],
			headers: {
				'Accept': 'application/json',
			  'Authorization': 'Basic ' + btoa(auth),
		  	'Content-Type': 'application/json'
			},
			body: body || {}
		}
	}
}



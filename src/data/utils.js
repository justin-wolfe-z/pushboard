import { URLs } from './shared_constants'

//simple frontend email validation to catch glaring errors, from https://stackoverflow.com/a/46181
export const validateEmail = email => {
	// eslint-disable-next-line
  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
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
			body: body ? JSON.stringify(body) : null
		}
	}
}

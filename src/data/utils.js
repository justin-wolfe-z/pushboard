//simple frontend email validation to catch glaring errors, from https://stackoverflow.com/a/46181
export const validateEmail = email => {
	// eslint-disable-next-line
  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

export default socket => store => next => action => {
	socket.emit('action', action)
	console.log('in middleware', action);
	return next(action);
}
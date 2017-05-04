import Server from 'socket.io';

export default function startServer(store) {
	const io = new Server().attach(8090);

	//in this moment, there's 

	//subscribe means that anytime there's a change on the store, io will emmit a state event.
	store.subscribe(
		() => io.emit('state', store.getState().toJS())
	);

	io.on('connection', (socket) => {
		socket.emit('state', store.getState().toJS());
		//on connection, socket initializes a listener for 'action'. Everytime there's an 'action' coming from the client,
		//it dispatches that action (received in the data parameter) to the server's store. 
		socket.on('action', data =>store.dispatch(data) );
	});
}


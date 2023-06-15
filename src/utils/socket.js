import { extendedConfigs } from '@/utils/configs'
import { io } from 'socket.io-client'

/* MAIN INSTANCE HERE */
let socketReceiveCallback = {};
let main = io(extendedConfigs.socketServer, { reconnection : true, autoConnect : true });
main.open();

main.on('connect', ()=>{
	if(!main.connected) return;
	console.log('is socket connected', main.connected);
});

main.on('connect_error', (error) => {
	console.log('connection failed');
	console.log(error);
});

main.on('disconnect', () =>{
	console.log('socket disconnected');
});

main.on('message', (data) =>{
	console.log('message', data);
	if(socketReceiveCallback['RECEIVED_MSG']){
		socketReceiveCallback['RECEIVED_MSG'](data)
	}
});

main.on('notification', (data) =>{
	console.log('notification', data);
});

//global function here, like join, leave, etc.
let socket = { 
	isConnected(){
		return (main.connected) ? true : false;
	},
	unassignSocketCallback(type){
		delete socketReceiveCallback[type]
	},
		assignSocketCallback(type, cb){
	socketReceiveCallback[type] = cb;
	},
	log(desc){
		console.log('[SOCKET]', desc);
	},
	leave(room){
		socket.log('Leaving room ' + room);
		main.emit('leave', room)
	},
	join(room){
		socket.log('Joining room ' + room);
		main.emit('join', room)
	}
}

const install = (app) => {
	app.config.globalProperties.$socket = socket
}

export { install as default, socket }
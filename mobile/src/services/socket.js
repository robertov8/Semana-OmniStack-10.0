import socketio from 'socket.io-client';
import { baseURL } from '../config';

const socket = socketio(baseURL, {
    autoConnect: false
});

const subscribeToNewDevs = subscribeFunction => socket.on('new-dev', subscribeFunction);

const connect = (latitude, longitude, techs) => {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    };
    
    socket.connect();
};

const disconnect = () => socket.connected && socket.disconnect();

export {
    connect,
    disconnect,
    subscribeToNewDevs
};
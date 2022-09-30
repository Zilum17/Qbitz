console.clear();
import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();
const httpServer = http.createServer(app);
const io = new WebSocketServer(httpServer);
let players = [], all = "true";
app.use(express.static(__dirname + '/public'));
io.on('connection', (socket) => {
    socket.on("plus:Point", () => {
        
    });
    socket.on('add:Player', data => {
        players.push(data.player);
        console.log(players);
        socket.emit('rtadd:Player',{players: players, cplayers: players.length});
    });
    socket.on('delete:Game',()=>{
        players.splice(0,players.length);
        socket.emit('refresh');
    });
});

httpServer.listen(3220);
console.log('Server on port 3220');
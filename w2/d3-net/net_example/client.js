const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');
const client = net.createConnection({
  port: 3001,
  host: '135.23.222.131'}, () => {
  console.log("Connection established!");
})
client.setEncoding('utf8');
const name = 'Emeka';
client.write(`${name} has connected!!`);
stdin.on('data', (whatYouTyped) => {
  client.write(`${name}: ${whatYouTyped}`);
})

client.on('data', (data) => {
  console.log(data);
})
// // client.js
// conn.on('data', (data) => {
//   console.log('Server says: ', data);
// });
// conn.on('connect', () => {
//   conn.write('Hello from client!');
// });

// conn.setEncoding('utf8'); // interpret data as text

// require('dotenv').config({ path: 'dev.env' });
// import { createServer } from './createServer';
// import { db } from './db';

// const server = createServer();

// // TODO Use express middleware to handle cookies (JWT)
// // TODO Use express middleware to populate current user

// server.start({
//     cors: {
//         credentials: true,
//         origin: process.env.FRONTEND_URL,

//     },
// },
//     deets => {
//         console.log(`Server is now running on port http:/localhost:${deets.port}`)
//     }
// ).catch(function () {
//     console.log("Promise Rejected");
// });
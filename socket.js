// let io;
//
// module.exports = {
//   init: (httpServer) => {
//     io = require("socket.io")(httpServer, {
//       cors: { origin: "*", methods: ["GET", "POST"] },
//     });
//     return io;
//   },
//   getIo: () => {
//     if (!io) {
//       throw new Error("Socket is not initialized");
//     }
//     return io;
//   },
// };
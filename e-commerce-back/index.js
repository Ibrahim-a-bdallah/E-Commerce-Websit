const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.db = router.db;
server.use(middlewares);
server.use(auth);
server.use(router);

module.exports = server; // تصدير الخادم لـ Vercel

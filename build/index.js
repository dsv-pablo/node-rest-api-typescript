"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
Server_1.server.listen(process.env.PORT || 5050, () => {
    console.log(`Server rodando na porta ${process.env.PORT || 5050}`);
});

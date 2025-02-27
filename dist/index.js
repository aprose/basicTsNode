"use strict";
// filepath: /workspaces/basicTsNode/src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Annotations_1 = require("./srcTSFunctions/Annotations");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
    (0, Annotations_1.annotations)();
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

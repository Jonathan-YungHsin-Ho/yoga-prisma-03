"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Posting",
    embedded: false
  },
  {
    name: "Industry",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://practice-server-2-5097b1f8fb.herokuapp.com/yoga-prisma-03/dev`
});
exports.prisma = new exports.Prisma();

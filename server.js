const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Posting = require('./resolvers/Posting');
const Industry = require('./resolvers/Industry');

const resolvers = {
	Query,
	Mutation,
	Posting,
	Industry,
};

const server = new GraphQLServer({
	typeDefs: './schema.graphql',
	resolvers,
	context: { prisma },
});

module.exports = server;

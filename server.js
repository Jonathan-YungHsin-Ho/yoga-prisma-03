const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const resolvers = {
	Query,
	Mutation,
};

const server = new GraphQLServer({
	typeDefs: './schema.graphql',
	resolvers,
	context: { prisma },
});

module.exports = server;

const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
	Query: {
		info: () =>
			`yoga-prisma-03 is a practice API using graphql-yoga and Prisma!`,
	},
};

const server = new GraphQLServer({
	typeDefs: './schema.graphql',
	resolvers,
	context: { prisma },
});

const options = {
	port: process.env.PORT || 4000,
};

server.start(options, ({ port }) =>
	console.log(
		`\n** Server started, listening on port ${port} for incoming requests **\n`,
	),
);

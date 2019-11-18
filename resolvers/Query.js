module.exports = {
	info,
	postings,
};

function info() {
	return `yoga-prisma-03 is a practice API using graphql-yoga and Prisma!`;
}

function postings(_root, _args, context) {
	return context.prisma.postings();
}

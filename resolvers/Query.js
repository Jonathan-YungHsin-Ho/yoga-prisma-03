module.exports = {
	info,
	postings,
	industries,
};

function info() {
	return `yoga-prisma-03 is a practice API using graphql-yoga and Prisma!`;
}

function postings(_root, _args, context) {
	return context.prisma.postings();
}

function industries(_root, _args, context) {
	return context.prisma.industries();
}

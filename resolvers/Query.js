module.exports = {
	info,
	postings,
};

function info() {
	return `yoga-prisma-03 is a practice API using graphql-yoga and Prisma!`;
}

async function postings(_parent, _args, context, _info) {
	return await context.prisma.postings();
}

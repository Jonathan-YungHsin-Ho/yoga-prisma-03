module.exports = {
	postings,
};

function postings(root, _args, context) {
	return context.prisma.industry({ id: root.id }).postings();
}

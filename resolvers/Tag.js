module.exports = {
	postings,
};

function postings(root, _args, context) {
	return context.prisma.tag({ id: root.id }).postings();
}

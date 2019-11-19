module.exports = {
	posting,
};

function posting(root, _args, context) {
	return context.prisma.rating({ id: root.id }).posting();
}

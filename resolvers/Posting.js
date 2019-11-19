module.exports = {
	industry,
};

function industry(root, _args, context) {
	return context.prisma.posting({ id: root.id }).industry();
}

module.exports = {
	industry,
	tags,
	ratings,
};

function industry(root, _args, context) {
	return context.prisma.posting({ id: root.id }).industry();
}

function tags(root, _args, context) {
	return context.prisma.posting({ id: root.id }).tags();
}

function ratings(root, _args, context) {
	return context.prisma.posting({ id: root.id }).ratings();
}

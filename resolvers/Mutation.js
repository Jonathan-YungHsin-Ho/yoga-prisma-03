module.exports = {
	addPosting,
	deletePosting,
	updatePosting,
};

function addPosting(_root, args, context) {
	return context.prisma.createPosting(args);
}

function deletePosting(_root, args, context) {
	return context.prisma.deletePosting({ id: args.id });
}

function updatePosting(_root, args, context) {
	const { id, coach, title, industry, location, price, description } = args;

	return context.prisma.updatePosting({
		data: { coach, title, industry, location, price, description },
		where: { id },
	});
}

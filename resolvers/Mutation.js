module.exports = {
	addPosting,
};

function addPosting(_root, args, context) {
	return context.prisma.createPosting({
		coach: args.coach,
		title: args.title,
		industry: args.industry,
		location: args.location,
		price: args.price,
		description: args.description,
	});
}

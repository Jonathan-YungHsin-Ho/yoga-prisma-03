module.exports = {
	addPosting,
	deletePosting,
	updatePosting,
	createManyIndustries,
};

function addPosting(_root, args, context) {
	const { coach, title, industry, location, price, description } = args;

	return context.prisma.createPosting({
		coach,
		title,
		location,
		industry: { connect: { name: industry } },
		price,
		description,
	});
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

// async function createManyIndustries(root, args, context) {
// 	const industries = await args.industries.map(industry =>
// 		context.prisma.createIndustry({ name: industry }),
// 	);
// 	return Promise.all(industries);
// }

function createManyIndustries(_root, args, context) {
	return args.industries.map(industry =>
		context.prisma.createIndustry({ name: industry }),
	);
}

var slug = require('slug');

const slugify = data => {
	return slug(data, { lower: true, replacement: '_', symbols: true });
};

console.log(slugify('☏-Number'));

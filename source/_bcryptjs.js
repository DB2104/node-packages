const bcryptjs = require('bcryptjs');

//Using Promises
/* const hashPassword = plaintext => {
	bcryptjs
		.genSalt(10)
		.then(salt => {
			return bcryptjs.hash(plaintext, salt);
		})
		.then(hash => {
			console.log('Hashed Password : ', hash);
		})
		.catch(err => {
			return err;
		});
};

const comparePassword = (password, hash) => {
	bcryptjs
		.compare(password, hash)
		.then(result => {
			if (result) console.log('Password matches');
			else console.log("Password doesn't match");
		})
		.catch(err => {
			console.err(err);
		});
}; */

//Using Async-Await
const hashPassword = async plaintext => {
	try {
		var salt = await bcryptjs.genSalt(10);
		var hash = await bcryptjs.hash(plaintext, salt);

		console.log('Hashed Password : ', hash);
	} catch (err) {
		console.err(err);
	}
};

const comparePassword = async (password, hash) => {
	try {
		var isMatch = await bcryptjs.compare(password, hash);

		if (isMatch) console.log('Password matches');
		else console.log("Password doesn't match");
	} catch (err) {
		console.err(err);
	}
};

hashPassword('sd');
comparePassword('sd', '$2a$10$p3GT32zwZ5OqtvS1.IMTmu6SO.ptHsHgYBHpDwasJuESeJ2AxUYBi');

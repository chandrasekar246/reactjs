let createBlog = (title, body) => {
	if (!title) {
		throw new Error('title is required!');
	}
	
	if(!body) {
		throw new Error('body is required!');
	}
	
	console.log(`${title} - ${body}`);
	
	return `${title} - ${body}`;
}

//alert(createBlog()); // Uncaught Error: title is required!
//alert(createBlog('MyTitle')); // Uncaught Error: body is required!
alert(createBlog('MyTitle', 'MyBody'));

let sqrt = num => num * num;

alert(sqrt(2));

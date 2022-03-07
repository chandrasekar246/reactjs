// object
let colors = {
	// properties
	names: ['Red', 'Green', 'Blue'],
	
	// methods
	printColorName: function() {
		setTimeout(() => console.log(this.names.join(":")), 1000);
	},
	
	printTest() {
		console.log(this.names);
	}
}

colors.printColorName();
colors.printTest();
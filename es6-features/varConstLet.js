var myName = 'Chandra';
myName = 'Sekar';
alert('var: ' + myName);

const myName2 = 'Chandra';
// myName2 = 'Sekar'; // Uncaught TypeError: invalid assignment to const 'myName2'
alert('const: ' + myName2);

{
	var myName3 = 'Chandra';
	myName = 'Sekar';
	let myName4 = 'Chandra';
	myName4 = 'Sekar';
	
	alert('var: ' + myName3);
	alert('let: ' + myName4);
}
alert('var: ' + myName3);
// alert('let: ' + myName4); // Uncaught ReferenceError: myName4 is not defined
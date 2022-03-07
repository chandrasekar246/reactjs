var id  = "EMP1073";
var	fName = "Chandra";

function print() {
	console.log(`${id} : ${fName}`);
}

// restructuring
let employee = {id, fName, print};

console.log(employee);

employee.print();
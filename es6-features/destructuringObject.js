let employee = {
	id : "EMP1073",
	fName : "Chandra",
	dept : "engineering",
	teamMates: ["EMP1065", "EMP2012", "EMP1072"]
}

// extracting only 2 props from object
let {fName, dept} = employee;
dept = 'product'
console.log(fName + ' - ' + dept);

// within fn
let printEmp = ({fName, dept}) => {
	console.log(fName + ' : ' + dept);
}

printEmp(employee);
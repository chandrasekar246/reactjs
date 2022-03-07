class Employee {
	constructor(fName, dept) {
		this.fName = fName;
		this.dept = dept;
	}
	
	display() {
		console.log(`Employee ${this.fName} belongs to ${this.dept} department`)
	}
}

const emp1 = new Employee("Chandra", "Engineering");
emp1.display();

class TechnicalEmployee extends Employee {
	constructor(fName, dept, role) {
		super(fName, dept);
		this.role = role;
	}
	
	display() {
		super.display();
		console.log(`Role: ${this.role}`)
	}
}

const emp2 = new TechnicalEmployee("Chandra", "Engineering", "TA");
emp2.display();

let team1 = ["EMP1065", "EMP2012", "EMP1072"];
let team2 = ["EMP2020", "EMP2021"];

// spread
let allTeam = [...team1, ...team2];
console.log(allTeam);

// rest
let [e1,e2, ...eRest] = allTeam;
console.log(e1);
console.log(e2);
console.log(eRest);

let emp = {
	id : "EMP001",
	fName : "Chandra"
}

let addr = {
	city : "Madurai",
	state: "TamilNadu"
}

let empAddr = {...emp, ...addr};

console.log(empAddr)
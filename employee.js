var employees = [

	{
		image: "images/chase_pic.jpg",
		name: "Hingle McKringleberry",
		title: "'The Writer'",
		about: "Supervisor of the Amplified Panatropic Computer Net, within the Matrix – he travels Time and Space in search of adventure! His Type 47 TARDIS is currently stuck in disguise as a 1960s E-type Jaguar sports car, his latest travelling companion is an android who rebelled against its programming, and is now out to help whoever it can towards freedom.",
		phoneNumber: "615-867-5309",
		email: "mckringleberryhingle@host.com"
	},
	{
		image: "images/simon.jpg",
		name: "Kathryn Furnace-Wardyworth",
		title: "'The Cleaner'",
		about: "Catering Technician (specialising in Soup and Beverages) – she travels Time and Space in search of adventure! Her Type 104 TARDIS is currently stuck in disguise as a filing cabinet, her latest travelling companion is a plucky nurse from the Crimean War, with a passion for adventure and a habit of yelling 'Lawks!'",
		phoneNumber: "865-743-1576",
		email: "Furnace-WardyworthKathryn@host.com"
	},
	{
		image: "images/benw.jpg",
		name: "Clara 'Coconut Crazy' Quick",
		title: "'The Oracle'",
		about: "Matrix network technician – she travels Time and Space in search of adventure! Her Type 82 TARDIS is currently stuck in disguise as The original 1960s-era Batmobile, and her latest travelling companion is an unexpectedly 'humanised' and reformed Dalek, who is having to fight occasional extermination urges.",
		phoneNumber: "431-598-6493",
		email: "'CoconutCrazyClara@host.com"
	},
	{
		image: "images/baby.jpg",
		name: "Kwang-Sun Goh",
		title: "'The Dancing Priest'",
		about: "Lecturer in Dynomorphic Trans-siderial Tachyon Bursts at the Patrexe Academy – he travels Time and Space in search of adventure! His Type 78 TARDIS is currently stuck in disguise as a nuclear missile, his latest travelling companion is an attitude-heavy 1977-era punk, whose safety-pin enhanced exterior hides a surprisingly kind heart.",
		phoneNumber: "981-431-2384",
		email: "GohKwang-Sun@host.com"
	},
	{
		image: "images/noTeeth.jpg",
		name: "Melilot Butcher",
		title: "'The Professor'",
		about: "Monitor Repair Specialist, based in the Capitol – she travels Time and Space in search of adventure! Her Type 76 TARDIS is currently stuck in disguise as a metal shipping container, her latest travelling companion is a governess from Victorian England, whose prim exterior hides a sharp wit and a brave heart.",
		phoneNumber: "123-456-7890",
		email: "baconbaconbacon@host.com"
	}
];


var employeeElement = document.getElementById("wrapper");


for (var i = 0; i < employees.length; i++) {
	var currentEmployee = employees[i];
	var image = "<div class='page employee-card'><div class='page-head'><img class='profile_pic' src='" + currentEmployee.image + "' alt='" + currentEmployee.name + "'></div>";
	var name = "<div class='page-content'><h3>" + currentEmployee.name + "</h3>";
	var title = "<p>" + currentEmployee.title + "</p>";
	var about = "<p>" + currentEmployee.about + "</p>";
	var phoneNumber = "<p>" + currentEmployee.phoneNumber + "</p>";
	var email = "<p>" + currentEmployee.email + "</p></div>";

	employeeElement.innerHTML += image + name + title + about + phoneNumber + email;

}















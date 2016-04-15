
var vacations = [
{
	name: "St. George, Bermuda",
	description: "The Love Triangle - You and your best two friends will spend 7 nights getting to know each other better.",
	price: "$999.99",
	url: "images/bermuda.jpg"
},

{
	name: "Gran Canaria, Spain",
	description: "The Spanish Romance - Relax for 5 nights in the beautiful Canary Islands.",
	price: "$1,299.99",
	url: "images/spain.jpg"
},

{
	name: "Dubai, United Arab Emirates",
	description: "On Top of The World - Enjoy 8 nights in this desert.",
	price: "$899.99",
	url: "images/dubai.jpg"
},

{
	name: "Libyan Desert, Libya",
	description: "Summer Survival - See if you can survive 7 days in the searing heat of Libya.",
	price: "$199.99",
	url: "images/libya.jpg"
},

{
	name: "Oymyakon, Russia",
	description: "Winter Escapade - 4 bone chilling nights in one of the coldest places on Earth.",
	price: "$299.99",
	url: "images/russia.jpg"
},

{
	name: "Rome, Italy",
	description: "All Roads Lead to Rome - Settle in for 30 days of living and do as the Romans do.",
	price: "$2,999.99",
	url: "images/rome.jpg"
},

{
	name: "The Outback, Austrailia",
	description: "Safari - Spend 12 nights under the stars in the Outback.",
	price: "$1,799.99",
	url: "images/outback.jpg"
},

{
	name: "St. Martin, Caribbean",
	description: "Taste of Europe -  Enjoy 6 nights of French and Dutch living.",
	price: "$1,099.99",
	url: "images/caribbean.jpg"
}
]

// console.log(vacations[1]);

var fileTags = document.getElementById('wrapper');
// console.log("inner", fileInfo );

for(i = 0; i < vacations.length; i +=1) {
	var eachPackage = vacations[i];
	fileTags.innerHTML +=
	"<div class='page card'><header class='page-header'><img class='pics' src =' " + eachPackage.url + "' alt= 'Vacation Pictures'></header>" +
	"<p class='name'>" + eachPackage.name + "</p>" +
	"<p class='description'>" + eachPackage.description + "</p>" +
	"<p class='price'>" + eachPackage.price + "</p></div>";

	// console.log("package", eachPackage );
}
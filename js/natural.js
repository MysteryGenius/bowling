const ancientTourPrices = (tour) => {
	switch (tour) {
		case "Aurora Tour":
			return 12000
			break;

		case "Grand Canyon Tour":
			return 6000
			break;

		case "Mount Everest Tour":
			return 1500
			break;

		case "Great Barrier Reef tour":
			return 500000
			break;
		case "Paricutin Tour":
			return 40000
			break;
		case "Victoria Falls Tour":
			return 900000
			break;
		case "Harbor of Rio de Janeiro Tour":
			return 6000
			break;
	}
}

function displayDetails() {
	const selectedTour = document.getElementById('tours').options[document.getElementById('tours').selectedIndex].value;
	const totalAdults = document.getElementById('adult').value;
	const totalChildren = document.getElementById('child').value;
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const dateish = document.getElementById('dateish').value;
	const tourPrice = ancientTourPrices(selectedTour);
	document.getElementById("details-tour").innerHTML = `Selected Tour : ${selectedTour}`;
	document.getElementById("details-adults").innerHTML = `Adults : ${totalAdults}`;
	document.getElementById("details-children").innerHTML = `Children : ${totalChildren}`;
	document.getElementById("details-name").innerHTML = `Name : ${name}`;
	document.getElementById("details-email").innerHTML = `Email : ${email}`;
	document.getElementById("details-date").innerHTML = `Date : ${dateish}`;
	document.getElementById("details-price").innerHTML = `Total Price : ${tourPrice}`;
}

document.querySelector('body').addEventListener("click", displayDetails, false)
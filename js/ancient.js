const ancientTourPrices = (tour) => {
	switch (tour) {
		case "Time Travel Tour":
			return 12000
			break;

		case "Ruins Tour":
			return 6000
			break;

		case "Hellenic tour":
			return 1500
			break;

		case "Mount Everest Tour":
			return 500000
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
	document.getElementById("details-date").innerHTML = `Date : ${selectedTour}`;
	document.getElementById("details-price").innerHTML = `Total Price : ${tourPrice}`;
}

document.querySelector('body').addEventListener("click", displayDetails, false)
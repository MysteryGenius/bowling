const targetForm = document.querySelector("#modern");

const modernTourPrices = (tour) => {
	switch (tour) {
		case "Great wall of china":
			return 500
			break;

		case "Taj Mahal":
			return 6000
			break;

		case "Chichen Itza":
			return 1000
			break;

		case "Machu Picchu":
			return 420
			break;

		case "Rio":
			return 375
			break;

		case "The Roman Colosseum":
			return 845
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
	const tourPrice = modernTourPrices(selectedTour);
	document.getElementById("details-tour").innerHTML = `Selected Tour : ${selectedTour}`;
	document.getElementById("details-adults").innerHTML = `Adults : ${totalAdults}`;
	document.getElementById("details-children").innerHTML = `Children : ${totalChildren}`;
	document.getElementById("details-name").innerHTML = `Name : ${name}`;
	document.getElementById("details-email").innerHTML = `Email : ${email}`;
	document.getElementById("details-date").innerHTML = `Date : ${selectedTour}`;
	document.getElementById("details-price").innerHTML = `Total Price : ${tourPrice}`;
}

document.querySelector('body').addEventListener("click", displayDetails, false)
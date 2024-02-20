console.log(data);

// WRITE YOUR CODE BELOW!
state = {
	dogs: [],
};

function createDogListButton(dog) {
	const dogButtonLi = document.createElement("li");
	dogButtonLi.classList.add("dogs-list__button");
	dogButtonLi.textContent = dog.name;
	dogButtonLi.addEventListener("click", () => createMainDogCard(dog));
	return dogButtonLi;
}

function addDogsToList() {
	const dogUl = document.querySelector(".dogs-list");
	data.forEach((dog) => {
		dogUl.appendChild(createDogListButton(dog));
	});
}

function createMainDogCard(dog) {
	clearDogMainSection();
	const mainSection = document.querySelector(".main__dog-section");

	const name = document.createElement("h2");
	name.textContent = dog.name;

	const img = document.createElement("img");
	img.src = dog.image;

	const divMain = document.createElement("div");
	divMain.classList.add("main__dog-section__desc");

	const bio = document.createElement("h3");
	bio.textContent = "Bio";

	const p = document.createElement("p");
	p.textContent =
		"Ea cillum aute enim cupidatat aliquip consequat quis dolor enim. Minim dolore exercitation est aliquip officia enim ea. Cupidatat ut exercitation qui laborum qui mollit cupidatat ipsum labore laborum consectetur. Sunt deserunt reprehenderit ipsum anim nulla cillum in nostrud ex nostrud. Ex fugiat ea in Lorem cupidatat ipsum sit do anim in.";
	const isNaughtyP = document.createElement("p");
	const isNaughtyEm = document.createElement("em");
	isNaughtyEm.textContent = "Is naughty? ";
	isNaughtyP.textContent = dog.isGoodDog === true ? "Yes!" : "No!";
	const isGoodDogBtn = document.createElement("button");
	isGoodDogBtn.textContent = dog.isGoodDog === true ? "Good Dog" : "Bad Dog";
	isGoodDogBtn.addEventListener("click", () => {
		dog.isGoodDog = !dog.isGoodDog;
		createMainDogCard(dog);
	});

	mainSection.appendChild(name);
	mainSection.appendChild(img);
	mainSection.appendChild(divMain);
	divMain.appendChild(bio);
	divMain.appendChild(p);
	mainSection.appendChild(isNaughtyP);
	isNaughtyP.prepend(isNaughtyEm);
	mainSection.appendChild(isGoodDogBtn);
}

function clearDogMainSection() {
	const mainSection = document.querySelector(".main__dog-section");
	mainSection.innerHTML = "";
}

function main() {
	addDogsToList();
}

main();

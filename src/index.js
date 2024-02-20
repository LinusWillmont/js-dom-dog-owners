console.log(data);

// WRITE YOUR CODE BELOW!
function handlerSetupAddDogButton() {
	const addDogButton = document.querySelector(
		".dogs-list__button.dogs-list__button--add"
	);
	addDogButton.addEventListener("click", () => renderAddDogForm());
}

function createDogListButton(dog) {
	const dogButtonLi = document.createElement("li");
	dogButtonLi.classList.add("dogs-list__button");
	dogButtonLi.textContent = dog.name;
	dogButtonLi.addEventListener("click", () => renderMainDogCard(dog));
	return dogButtonLi;
}

function renderDogsList() {
	clearDogList();
	const dogUl = document.querySelector(".dogs-list");
	data.forEach((dog) => {
		dogUl.appendChild(createDogListButton(dog));
	});
}

function renderMainDogCard(dog) {
	clearMain();
	const main = document.querySelector(".main");

	const section = document.createElement("section");
	section.classList.add("main__dog-section");

	const name = document.createElement("h2");
	name.textContent = dog.name;

	const img = document.createElement("img");
	img.src = dog.image;

	const divMain = document.createElement("div");
	divMain.classList.add("main__dog-section__desc");

	const bio = document.createElement("h3");
	bio.textContent = "Bio";

	const p = document.createElement("p");
	p.textContent = dog.bio;
	const isNaughtyP = document.createElement("p");
	const isNaughtyEm = document.createElement("em");
	isNaughtyEm.textContent = "Is naughty? ";
	isNaughtyP.textContent = dog.isGoodDog === true ? "No!" : "Yes!";
	const isGoodDogBtn = document.createElement("button");
	isGoodDogBtn.textContent = dog.isGoodDog === true ? "Good Dog" : "Bad Dog";
	isGoodDogBtn.addEventListener("click", () => {
		dog.isGoodDog = !dog.isGoodDog;
		console.log(dog.isGoodDog);
		renderMainDogCard(dog);
	});

	main.appendChild(section);
	section.appendChild(name);
	section.appendChild(img);
	section.appendChild(divMain);
	divMain.appendChild(bio);
	divMain.appendChild(p);
	section.appendChild(isNaughtyP);
	isNaughtyP.prepend(isNaughtyEm);
	section.appendChild(isGoodDogBtn);
}

function renderAddDogForm() {
	clearMain();
	const main = document.querySelector(".main");

	const section = document.createElement("section");
	section.classList.add("main__dog-section");

	const title = document.createElement("h2");
	title.textContent = "Add a new Dog";

	const form = document.createElement("form");

	const nameLabel = document.createElement("label");
	nameLabel.textContent = "Dog's name";
	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.id = "name";
	nameInput.name = "name";
	nameInput.placeholder = "Name";

	const imageLabel = document.createElement("label");
	imageLabel.textContent = "Dog's picture";
	const imageInput = document.createElement("input");
	imageInput.type = "url";
	imageInput.id = "image";
	imageInput.name = "image";
	imageInput.placeholder = "url";

	const bioLabel = document.createElement("label");
	bioLabel.textContent = "Dog's bio";
	const bioInput = document.createElement("textarea");
	bioInput.rows = "5";
	bioInput.id = "bio";
	bioInput.name = "bio";
	bioInput.placeholder = "Bio";

	const submitInput = document.createElement("input");
	submitInput.type = "submit";
	submitInput.id = "submit";
	submitInput.name = "submit";
	submitInput.value = "Let's add a dog!";
	submitInput.addEventListener("click", (event) => {
		event.preventDefault();
		newDog = {
			id: data.length + 1,
			name: nameInput.value,
			bio: bioInput.value,
			isGoodDog: false,
			image: imageInput.value,
		};
		data.unshift(newDog);
		renderDogsList();
	});

	main.appendChild(section);
	section.appendChild(title);
	section.appendChild(form);
	form.appendChild(nameLabel);
	form.appendChild(nameInput);

	form.appendChild(imageLabel);
	form.appendChild(imageInput);

	form.appendChild(bioLabel);
	form.appendChild(bioInput);

	form.appendChild(submitInput);
}

function clearMain() {
	const main = document.querySelector(".main");
	main.innerHTML = "";
}

function clearDogList() {
	const dogUl = document.querySelector(".dogs-list");
	dogUl.innerHTML = `<li class="dogs-list__button dogs-list__button--add">+</li>`;
	handlerSetupAddDogButton();
}

function main() {
	renderDogsList();
}

main();

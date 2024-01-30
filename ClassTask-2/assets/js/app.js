const cardsContainer = document.querySelector(".cards__container");

const database = [
  {
    id: 1,
    fullName: "Jon Kantner",
    profession: "Designer",
    imgURL: "unsplash_YcclkJH1TIk.svg",
  },
  {
    id: 2,
    fullName: "Debbie LaChusa",
    profession: "CEO",
    imgURL: "10.svg",
  },
  {
    id: 3,
    fullName: "Edwin Diaz",
    profession: "Composer",
    imgURL: "09.svg",
  },
  {
    id: 4,
    fullName: "Cassie Evans",
    profession: "Photographer",
    imgURL: "11.svg",
  },
  {
    id: 5,
    fullName: "Erich Andreas",
    profession: "Programmer",
    imgURL: "06.svg",
  },
  {
    id: 6,
    fullName: "Jason Allen",
    profession: "Accounting",
    imgURL: "02.svg",
  },
];

function showCardsUI() {
  database.forEach((item) => {
    const newCard = createCard(item);
    cardsContainer.insertAdjacentHTML("beforeend", newCard);
  });
}

showCardsUI();

function createCard(data) {
  return `
    <div data-id='${data.id}' class="card__container">
        <div class="card__header__img">
          <img src="./assets/images/${data.imgURL}" alt="" />
        </div>

        <div class="card__footer">
          <p class="card__fullName">${data.fullName}</p>
          <p class="card__profession">${data.profession}</p>
        </div>
    </div>
    `;
}

const cardData = [
  {
    userImg:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1704521134~exp=1704521734~hmac=4870183bd764f12b152df0a52484440c5a91ef303b86edc43c9fc73217f451ab",
    userName: "John Doe",
    userEmail: "johndoe@example.com",
    userAge: "28 years old",
    userInfo:
      "A passionate wildlife enthusiast and photographer, often found exploring nature.",
    btn: "X",
  },
  {
    userImg:
      "https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg",
    userName: "Jane Smith",
    userEmail: "janesmith@example.com",
    userAge: "35 years old",
    userInfo:
      "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.",
    btn: "X",
  },
  {
    userImg:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1704521134~exp=1704521734~hmac=4870183bd764f12b152df0a52484440c5a91ef303b86edc43c9fc73217f451ab",
    userName: "Mike Brown",
    userEmail: "mikebrown@example.com",
    userAge: "45 years old",
    userInfo:
      "An enthusiastic individual, deeply passionate about both playing the guitar and coding. With an inherent love for music,",
    btn: "X",
  },
  {
    userImg:
      "https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg",
    userName: "Sarah Johnson",
    userEmail: "sarajohnson@example.com",
    userAge: "30 years old",
    userInfo:
      "Tech-savvy and innovative. Sarah is known for her cutting-edge software solutions",
    btn: "X",
  },
  {
    userImg:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1704521134~exp=1704521734~hmac=4870183bd764f12b152df0a52484440c5a91ef303b86edc43c9fc73217f451ab",
    userName: "Alex Martinez",
    userEmail: "alexmartinez@example.com",
    userAge: "27 years old",
    userInfo:
      "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country",
    btn: "X",
  },
];

const userContainer = document.querySelector(".users-container");

cardData.forEach((data) => {
  const userCard = document.createElement("div");
  userCard.className = "user-container";

  userCard.innerHTML = `
    <img src="${data.userImg}" alt="User Image" class="user-image" />
    <div class="user-details">
      <h2 class="user-name">${data.userName}</h2>
      <p class="user-email">${data.userEmail}</p>
      <p class="user-age">${data.userAge}</p>
      <p class="user-info">${data.userInfo}</p>
    </div>
    <a class="btn-close">X</a>
  `;

  const btnClose = userCard.querySelector(".btn-close");

  btnClose.addEventListener("click", () => {
    userCard.remove();
  });

  userContainer.appendChild(userCard);
});

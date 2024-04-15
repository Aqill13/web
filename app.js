// ? Login Form Display None / Flex
const loginformDisplay = document.querySelector(".loginform-content");
const closeFormBtn = document.querySelector("#close-form");
const openFormBtn = document.querySelector("#openClose-form-btn");
const navbar = document.querySelector(".navbar");

openFormBtn.addEventListener("click", (e) => {
  loginformDisplay.style.display = "flex";
  if (document.body.classList.contains("darkMode")) {
    navbar.style.backgroundColor = "#313335";
  } else {
    navbar.style.backgroundColor = "var(--grey-color)";
  }
});
closeFormBtn.addEventListener("click", (e) => {
  loginformDisplay.style.display = "none";
  navbar.style.backgroundColor = "var(--primary-color)";
  //TODO: Name Input
  document.getElementById("form-name-inp").value = "";
  document.getElementById("form-name-inp").style.border = "none";
  //TODO: Email Input
  document.getElementById("form-email-inp").value = "";
  document.getElementById("form-email-inp").style.border = "none";
  //TODO: Password Input
  document.getElementById("form-pass-inp").value = "";
  document.getElementById("form-pass-inp").style.border = "none";
  //TODO: Display None Alert
  document.getElementById("alert-name").style.display = "none";
  document.getElementById("alert-email").style.display = "none";
  document.getElementById("alert-pass").style.display = "none";
});

// ? Login yoxlama
const loginForm = document.querySelector(".loginform");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // * Alerts Display
  const alertName = document.getElementById("alert-name");
  const alertEmail = document.getElementById("alert-email");
  const alertPass = document.getElementById("alert-pass");
  // * inputs Value
  const nameinput = document.querySelector("#form-name-inp");
  const emailinput = document.querySelector("#form-email-inp");
  const passinput = document.querySelector("#form-pass-inp");

  if (nameinput.value == "") {
    alertName.style.display = "block";
    nameinput.style.border = "2px solid red";
  }
  if (emailinput.value == "") {
    alertEmail.style.display = "block";
    emailinput.style.border = "2px solid red";
  }
  if (passinput.value == "") {
    alertPass.style.display = "block";
    passinput.style.border = "2px solid red";
  }
});

// ? Dark Light Mode Button
const modeDarkLight = document.querySelector("#mode");
const iconMode = document.querySelector("#icon-mode");
modeDarkLight.addEventListener("click", (e) => {
  if (document.body.classList.contains("darkMode")) {
    document.body.classList.remove("darkMode");
    iconMode.classList.remove("fa-sun");
    iconMode.classList.add("fa-moon");
    iconMode.style.color = "#3b5998";
    modeDarkLight.style.borderColor = "#3b5998";
  } else {
    document.body.classList.add("darkMode");
    iconMode.classList.remove("fa-moon");
    iconMode.classList.add("fa-sun");
    iconMode.style.color = "yellow";
    modeDarkLight.style.borderColor = "yellow";
  }
});

// ? hisse 9 comments next/prev

const H10displayImg = document.querySelector(".hisse10-box1 img");
const H10displayName = document.querySelector(".hisse10-box1 h3");
const H10displayComment = document.querySelector(".hisse10-box1 p");

const H10images = [
  "https://res2.weblium.site/res/5d24f311ed37e00028d4aadd/5d6e5ca0a32369002422842e_optimized_1413_c930x1395-241x286?nowebp",
  "https://res2.weblium.site/res/5d2f00cfc084d50024f94ac3/5d5fece789c4040024794bb1_optimized_1920_c1010x981-439x139?nowebp",
  "https://res2.weblium.site/res/5cb55fc3b6061800241780c1/5cb87db761983800232100af_optimized_930_c930x1395-0x0?nowebp",
];
const H10name = ["Aygün Paşayeva", "Təbriz Nəcəfov", "Zəhra Hüseynova"];
const H10comments = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iustovitae consequatur quae, rem velit corporis magni ab nostrum porroomnis, laudantium cupiditate repellat! Tenetur!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iustovitae consequatur quae, laudantium cupiditate repellat! Tenetur!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit corporis magni ab nostrum porroomnis, laudantium cupiditate repellat! Tenetur!",
];

let index = 0;
function showComment() {
  const item = index;
  H10displayImg.src = H10images[item];
  H10displayName.textContent = H10name[item];
  H10displayComment.textContent = H10comments[item];
}
function nextComments() {
  index++;
  if (index >= H10images.length) index = 0;
  showComment();
}
function prevComments() {
  index--;
  if (index < 0) index = H10images.length - 1;
  showComment();
}

// ! Hisse 7 box hover mouse effect

const kutular = document.querySelectorAll("#hisse7-box");

kutular.forEach((kutu) => {
  kutu.addEventListener("mousemove", (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const kutuRect = kutu.getBoundingClientRect();
    const kutuX = kutuRect.left + window.scrollX;
    const kutuY = kutuRect.top + window.scrollY;

    const offsetX = mouseX - kutuX;
    const offsetY = mouseY - kutuY;

    kutu.style.background = `radial-gradient(circle at ${offsetX}px ${offsetY}px, #666 -250%, var(--primary-color) 70%)`;
  });

  kutu.addEventListener("mouseleave", () => {
    kutu.style.background = "var(--primary-color)"; // Mouse çıkınca orijinal rengine dön
  });
});

// ! Hisse 6 box hover mouse effect
const kutular_h6 = document.querySelectorAll("#hisse6-box");

kutular_h6.forEach((kutu) => {
  kutu.addEventListener("mousemove", (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const kutuRect = kutu.getBoundingClientRect();
    const kutuX = kutuRect.left + window.scrollX;
    const kutuY = kutuRect.top + window.scrollY;

    const offsetX = mouseX - kutuX;
    const offsetY = mouseY - kutuY;

    kutu.style.background = `radial-gradient(circle at ${offsetX}px ${offsetY}px, #6C63FF -250%, var(--primary-color) 70%)`;
  });

  kutu.addEventListener("mouseleave", () => {
    kutu.style.background = "var(--primary-color)"; // Mouse çıkınca orijinal rengine dön
  });
});
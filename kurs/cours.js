// ! sayfa url-si
const url = new URLSearchParams(window.location.search);
const category = url.get("category");

console.log(category);

// ! displaymiz
const main = document.querySelector(".main");

const content = {
  html: {
    h2: "HTML",
    p: "12,346",
  },
  css: {
    h2: "CSS",
    p: "11,766",
  },
  javascript: {
    h2: "JavaScript",
    p: "19,149",
  },
  bootstrap: {
    h2: "Bootstarp",
    p: "9,126",
  },
  react: {
    h2: "ReactJS",
    p: "14,812",
  },
  angularjs: {
    h2: "AngularJS",
    p: "10,351",
  },
  java: {
    h2: "Java",
    p: "19,301",
  },
  php: {
    h2: "PHP",
    p: "13,991",
  },
  python: {
    h2: "Python",
    p: "12,051",
  },
  ruby: {
    h2: "Ruby",
    p: "10,311",
  },
  csharp: {
    h2: "C#",
    p: "17,962",
  },
  vebdizayn: {
    h2: "Veb Dizayn",
    p: "9,351",
  },
  uxdizayn: {
    h2: "UX Dizayn",
    p: "9,101",
  },
  uxarasdirmasi: {
    h2: "UX araşdırması",
    p: "10,351",
  },
  uianimasiyasi: {
    h2: "UI animasiyası",
    p: "10,351",
  },
  mobilproqramdizayn: {
    h2: "Mobil proqram animasiyası",
    p: "10,351",
  },
};

window.addEventListener("DOMContentLoaded", displayCours(category));

function displayCours(category_item) {
  const selectContent = content[category_item];

  const display = `<section class="cours_section_1">
                        <h2>${selectContent.h2} Kursları</h2>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <p>${selectContent.p} tələbə</p>
                        </div>
                    </section>
                    <div class="section_arasi_dalga_alt">
                        <div class="custom-shape-divider-bottom-1707129846">
                            <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            >
                            <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            class="shape-fill"
                            ></path>
                            </svg>
                        </div>
                    </div>`;

  main.innerHTML = display;
}

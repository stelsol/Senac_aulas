const btnbanner = document.querySelector(".btnbanner");
const banner = document.querySelector(".banner");

// Aviso que a pagina que o buttun direciona não existe
btnbanner.addEventListener("click", function () {
  let div = document.createElement("div");
  let span = document.createElement("span");

  span.textContent = "Pagina em desenvolvimento";

  div.className =
    "opacity-0 translate-y-2 transition-all duration-300 bg-red-600 text-white px-4 py-2 rounded-md mt-2";

  div.appendChild(span);
  banner.appendChild(div);

  requestAnimationFrame(() => {
    div.classList.remove("opacity-0", "translate-y-2");
    div.classList.add("opacity-100", "translate-y-0");
  });

  setTimeout(() => {
    div.classList.remove("opacity-100", "translate-y-0");
    div.classList.add("opacity-0", "translate-y-2");

    setTimeout(() => {
      div.remove();
    }, 300);
  }, 3000);
});

// Adicionando o buttun  Gostei aos cards
const bntlike = document.querySelectorAll(".btn-like");

// console.log(bntlike);
bntlike.forEach((element) => {
  element.addEventListener("click", function gostei() {
    // no caso o bntlike é uma lista com 3 buttons temos que pegar um de cada e não tudo e ali é o element(Cada boto é um element no caso)
    // console.log(element);
    let span = element.querySelector("span");
    let like = Number(span.innerText);
    let heart = element.querySelector("i");

    heart.classList.remove("bi-heart");
    heart.classList.add("bi-heart-fill");
    heart.classList.add("text-red-500");
    span.classList.add("text-red-500");
    like++;

    span.innerText = like;
  });
});

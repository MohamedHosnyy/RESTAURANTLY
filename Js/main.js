
//
const iconmenu = document.querySelector(".bi-list");
const ul = document.querySelector("nav .navbars .link-list ul");
const logo = document.querySelector(".logo");

iconmenu.addEventListener("click", (eo) => {
  ul.classList.toggle("ul-toogle");
  logo.classList.toggle("logo-toggle");
  iconmenu.classList.toggle("bi-x");
});

//
const nav = document.querySelector("nav");
const topbar = document.querySelector(".top-bar");

window.addEventListener("scroll", (eo) => {
  if (window.scrollY > 30) {
    nav.classList.add("nav-toggle", "nav-fixed", "top-opacity");
  } else {
    nav.classList.remove("nav-toggle", "nav-fixed", "top-opacity");
  }
});

//
const linkmenue = document.querySelectorAll(".link-menue");
const boxmenue = document.querySelectorAll(".box-menue");
linkmenue.forEach((link) => {
  link.addEventListener("click", (eo) => {
    linkmenue.forEach((currentItem) => {
      currentItem.classList.remove("active");
      link.classList.add("active");
    });
    boxmenue.forEach((boxmenue) => {
      boxmenue.style.display = "none";
    });
    document.querySelectorAll(eo.target.dataset.menu).forEach((el) => {
      el.style.display = "block";
    });
  });
});

//
const linknav = document.querySelectorAll(".navbars .link-list ul li a");
const sec = document.querySelectorAll("section");

linknav.forEach((link) => {
  link.addEventListener("click", (eo) => {
    linknav.forEach((item) => {
      item.classList.remove("active");
      link.classList.add("active");
    });
    sec.forEach((sec) => {
      sec.scrollIntoView({ behavior: "smooth" });
    });
  });
});

//

const linktab = document.querySelectorAll(".spicials .tabs-link ul li");
const detiales = document.querySelectorAll(".spicials .detiales ");
const onlyimg = document.querySelectorAll(".spicials .image-spicales");

linktab.forEach((tabone) => {
  tabone.addEventListener("click", (eo) => {
    linktab.forEach((tabtwo) => {
      tabtwo.classList.remove("active");
      tabone.classList.add("active");
    });
    detiales.forEach((detiales) => {
      detiales.style.display = "none";
    });
    onlyimg.forEach((onlyimg) => {
      onlyimg.style.display = "none";
    });
    document.querySelectorAll(eo.target.dataset.spocials).forEach((ele) => {
      ele.style.display = "block";
    });
  });
});

//
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//
const book = document.querySelector(".book");
const booktable = document.querySelector(".book-table");
const btnbook = document.querySelector(".btn-book");
const btnmenue = document.querySelector(".btn-menue");
const menue = document.querySelector(".menue");

function logic(el) {
  el.addEventListener("click", (eo) => {
    booktable.scrollIntoView({ behavior: "smooth" });
  });
}
logic(book, btnbook, btnmenue);
//
var swiper = new Swiper(".mySwiperes", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//

const imgallery = document.querySelectorAll(".gallery .image-galler img");

imgallery.forEach((img) => {
  img.addEventListener("click", (eo) => {
    let div = document.createElement("div");
    div.className = "poup-ovarlay";
    document.body.appendChild(div);
    let box = document.createElement("div");
    box.className = "poup-box";
    let imageboxes = document.createElement("img");
    imageboxes.className = "images";
    imageboxes.src = img.src;
    box.appendChild(imageboxes);
    document.body.appendChild(box);
    let closes = document.createElement("div");
    closes.className = "button-close";
    let ggggggg = document.createTextNode("x");
    closes.appendChild(ggggggg);
    document.body.appendChild(closes);
  });
  document.addEventListener("click", (e) => {
    if (e.target.className == "button-close") {
      document.querySelector(".poup-box").remove();
      document.querySelector(".poup-ovarlay").remove();
      document.querySelector(".button-close").remove();
    }
  });
});

//

const arrow = document.querySelector(".arrow-top");
window.onscroll = () => {
  if (window.scrollY >= 1000) {
    arrow.classList.add("toggle-arrow");
  } else {
    arrow.classList.remove("toggle-arrow");
  }
  arrow.addEventListener("click", (eo) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

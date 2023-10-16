const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const aNav = document.querySelectorAll("nav a");
for (let i = 0; i < aNav.length; i++) {
  aNav[i].className = "italic";
}
const arr1 = [];
for (const navItem in siteContent.nav) {
  arr1.push(siteContent.nav[navItem]);
}

aNav[0].textContent = siteContent.nav["nav-item-1"];
for (let i = 0; i < aNav.length; i++) {
  aNav[i].textContent = arr1[i];
}

const ilkBaslik = document.querySelector("h1");
ilkBaslik.textContent = siteContent.cta.h1;

const baslikButton = document.querySelector(".cta-text button");
baslikButton.textContent = siteContent.cta.button;

//images

const logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", siteContent.images["logo-img"]);

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.images["cta-img"]);

const accentImg = document.getElementById("middle-img");
accentImg.setAttribute("src", siteContent.images["accent-img"]);

const contactH4 = document.querySelector(".contact h4");

contactH4.textContent = siteContent.iletisim["iletişim-h4"];

const pContactItem = [];
for (const contactItem in siteContent.iletisim) {
  pContactItem.push(siteContent.iletisim[contactItem]);
}
pContactItem.shift();

const pContact = document.querySelectorAll(".contact p");
for (let i = 0; i < pContact.length; i++) {
  pContact[i].textContent = pContactItem[i];
}

const aFooter = document.querySelector("footer a");
aFooter.className = "bold";
aFooter.textContent = siteContent.footer.copyright;

const contentH4 = document.querySelectorAll(".text-content h4");

const h4value = [];
for (const conItem in siteContent["ana-içerik"]) {
  if (conItem.includes("h4")) {
    h4value.push(siteContent["ana-içerik"][conItem]);
  }
}

for (let i = 0; i < contentH4.length; i++) {
  contentH4[i].textContent = h4value[i];
}

const contentP = document.querySelectorAll(".text-content p");

const pValue = [];
for (const pItem in siteContent["ana-içerik"]) {
  if (pItem.includes("içeri")) {
    pValue.push(siteContent["ana-içerik"][pItem]);
  }
}

for (let i = 0; i < contentP.length; i++) {
  contentP[i].textContent = pValue[i];
}

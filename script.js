console.log("Gallery script loaded");

let currentIndex = 0;

const works = [
  { image: "2d.jpg", description: "" },
  { image: "2dwork1.jpg", description: "" },
  { image: "03bkpp.jpg", description: "" },
  { image: "03nyc.jpg", description: "" },
  { image: "03nycc.jpg", description: "" },
  { image: "20anos.jpg", description: "" },
  { image: "2023.jpg", description: "" },
  { image: "bksp.jpg", description: "" },
  { image: "chikibb.jpg", description: "" },
  { image: "cuca.jpg", description: "" },
  { image: "delnpals.jpg", description: "" },
  { image: "IMG_3410.JPG", description: "" },
  { image: "kelso.jpg", description: "" },
  { image: "kelsoo.JPEG", description: "" },
  { image: "macho.jpg", description: "" },
  { image: "mami.jpg", description: "" },
  { image: "meowweb.jpg", description: "" },
  { image: "new.jpg", description: "" },
  { image: "new2d.jpg", description: "" },
  { image: "neweeb.jpg", description: "" },
  { image: "newnew.jpg", description: "" },
  { image: "newweb.jpg", description: "" },
  { image: "newwebbb.jpg", description: "" },
  { image: "Papi.jpg", description: "Papi" },
  { image: "performance.jpg", description: "Performance" },
  { image: "thatnewneww.jpg", description: "" },
  { image: "thefirstconnection.jpg", description: "The First Connection" },
  { image: "utero.jpg", description: "" },
  { image: "webhomepage.jpg", description: "" },
  { image: "webimagenew.jpg", description: "" }
];

// DOM elements
const imageElement = document.getElementById("workImage");
const descriptionElement = document.getElementById("workDescription");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Update gallery function
function updateGallery(index) {
  const work = works[index];
  imageElement.src = work.image;
  imageElement.alt = work.description;
  descriptionElement.textContent = work.description;
}

// Initialize
updateGallery(currentIndex);

// Button navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + works.length) % works.length;
  updateGallery(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % works.length;
  updateGallery(currentIndex);
});


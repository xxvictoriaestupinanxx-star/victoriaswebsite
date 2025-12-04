console.log("Gallery script loaded");

let currentIndex = 0;

// Image list using EXACT filenames you provided
const works = [
  { image: "images/2d.jpg", description: "2D Artwork" },
  { image: "images/2dwork1.jpg", description: "2D Work 1" },
  { image: "images/03bkpp.jpg", description: "03 BKPP" },
  { image: "images/O3nyc.jpg", description: "O3 NYC" },

  // Uses Cyrillic file name exactly as you typed it:
  { image: "images/03nусс.jpg", description: "03 nусс" },

  { image: "images/20anos.jpg", description: "20 años" },
  { image: "images/2023.jpg", description: "2023 Work" },
  { image: "images/bksp.jpg", description: "BKSP" },
  { image: "images/chikibb.jpg", description: "Chikibb" },
  { image: "images/cuca.jpg", description: "Cuca" },

  // FIXED → delnpals.jpg
  { image: "images/delnpals.jpg", description: "Deln Pals" },

  { image: "images/IMG_3410.JPG", description: "IMG 3410" },
  { image: "images/kelso.jpg", description: "Kelso" },
  { image: "images/kelsoo.JPEG", description: "Kelsoo" },
  { image: "images/macho.jpg", description: "Macho" },
  { image: "images/mami.jpg", description: "Mami" },
  { image: "images/meowweb.jpg", description: "Meow Web" },
  { image: "images/new.jpg", description: "New Work" },
  { image: "images/new2d.jpg", description: "New 2D" },
  { image: "images/neweeb.jpg", description: "New EEB" },
  { image: "images/newnew.jpg", description: "New New" },
  { image: "images/newweb.jpg", description: "New Web" },
  { image: "images/newwebbb.jpg", description: "New Web BB" },
  { image: "images/Papi.jpg", description: "Papi" },
  { image: "images/performance.jpg", description: "Performance" },
  { image: "images/thatnewneww.jpg", description: "That New New" },
  { image: "images/thefirstconnection.jpg", description: "The First Connection" },
  { image: "images/utero.jpg", description: "Utero" },
  { image: "images/webhomepage.jpg", description: "Web Homepage" },
  { image: "images/webimagenew.jpg", description: "Web Image New" }
];

// DOM elements
const imageElement = document.getElementById("workImage");
const descriptionElement = document.getElementById("workDescription");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Update slide
function updateGallery(index) {
  const work = works[index];
  imageElement.src = work.image;
  imageElement.alt = work.description;
  descriptionElement.textContent = work.description;
}

// Initial load
updateGallery(currentIndex);

// Buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + works.length) % works.length;
  updateGallery(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % works.length;
  updateGallery(currentIndex);
});

console.log("Gallery script loaded");

let currentIndex = 0;


const works = [
  { image: "images/2d.jpg", description: "" },
  { image: "images/2dwork1.jpg", description: "" },
  { image: "images/03bkpp.jpg", description: "" },
  { image: "images/O3nyc.jpg", description: "" },
  { image: "images/03nycc.jpg", description: "" },
  { image: "images/20anos.jpg", description: "" },
  { image: "images/2023.jpg", description: "" },
  { image: "images/bksp.jpg", description: "" },
  { image: "images/chikibb.jpg", description: "" },
  { image: "images/cuca.jpg", description: "" },
  { image: "images/delnpals.jpg", description: "" },
  { image: "images/kelso.jpg", description: "" },
  { image: "images/kelsoo.JPEG", description: "" },
  { image: "images/macho.jpg", description: "" },
  { image: "images/mami.jpg", description: "" },
  { image: "images/meowweb.jpg", description: "" },
  { image: "images/new.jpg", description: "" },
  { image: "images/new2d.jpg", description: "" },
  { image: "images/neweeb.jpg", description: "" },
  { image: "images/newnew.jpg", description: "" },
  { image: "images/newweb.jpg", description: "" },
  { image: "images/newwebbb.jpg", description: "" },
  { image: "images/Papi.jpg", description: "" },
  { image: "images/performance.jpg", description: "" },
  { image: "images/thatnewneww.jpg", description: "" },
  { image: "images/thefirstconnection.jpg", description: "The First Connection" },
  { image: "images/utero.jpg", description: "" },
  { image: "images/webimagenew.jpg", description: "" }
];


const imageElement = document.getElementById("workImage");
const descriptionElement = document.getElementById("workDescription");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


function updateGallery(index) {
  const work = works[index];
  imageElement.src = work.image;
  imageElement.alt = work.description;
  descriptionElement.textContent = work.description;
}


updateGallery(currentIndex);


prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + works.length) % works.length;
  updateGallery(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % works.length;
  updateGallery(currentIndex);
});

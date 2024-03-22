let characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/es.starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg/revision/latest?cb=20160716165228",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];
const row = document.querySelector(".row");

function renderCharacters() {
  let firstBtn = document.getElementById("firstBtn");
  let mainHeader = document.getElementById("mainHeader");
  let createDiv = document.createElement("div");
  createDiv.classList.add("row");
  mainHeader.appendChild(createDiv);
  for (character of characters) {
    let card = `
          <div class="col-xxl-3 col-lg-4 col-md-6 mb-5 d-flex justify-content-center">
            <div class="card" style="width: 18rem ">
                  <img src="${
                    character.pic
                  }" class="card-img-top" style="height: 25rem "/>
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">
                  ${character.homeworld || "others"}
                </p>
              </div>
            </div>
          </div>
      `;
    createDiv.innerHTML += card;
  }
  firstBtn.textContent = "Hide characters";
  firstBtn.classList.remove("btn-success");
  firstBtn.classList.add("btn-danger");
  firstBtn.onclick = removeCharacters;
  row.classList.add("d-none");
}

function removeCharacters() {
  mainHeader.innerHTML = "";
  firstBtn.textContent = "Show characters";
  firstBtn.classList.remove("btn-danger");
  firstBtn.classList.add("btn-success");
  firstBtn.onclick = renderCharacters;
  row.classList.remove("d-none");
}

let homeworldsRaw = characters.map(
  (characters) => characters.homeworld ?? "others"
);

let homeworlds = [
  ...new Set(
    characters.map((character) =>
      (character.homeworld ?? "others").toLowerCase()
    )
  ),
];
const filterContainer = document.querySelector(".filter-container");
filterContainer.innerHTML = homeworlds
  .map(
    (homeworld) =>
      `
  <div class="form-check text-white mx-2 mb-5">
     <input class="form-check-input" type="radio"  name="homeworld" id="homeworld-${homeworld}" value="${homeworld}">
     <label class="form-check-label " for="homeworld-${homeworld}">${homeworld}</label>
   </div>
`
  )
  .join("");

filterContainer.addEventListener("change", function (event) {
  if (event.target.classList.contains("form-check-input")) {
    const selectedHomeworld = event.target.value;
    const selecetedCharacter = characters.filter((character) => {
      const homeworld = character.homeworld
        ? character.homeworld.toLowerCase()
        : "others";
      return homeworld === selectedHomeworld;
    });
    row.innerHTML = selecetedCharacter
      .map((character) => {
        return `
      <div class="col-xxl-3 col-lg-4 col-md-6 mb-5 d-flex justify-content-center">
                   <div class="card" style="width: 18rem ">
                         <img src="${
                           character.pic
                         }" class="card-img-top" style="height: 25rem "/>
                     <div class="card-body">
                       <h5 class="card-title">${character.name}</h5>
                       <p class="card-text">
                         ${character.homeworld || "others"}
                       </p>
                     </div>
                   </div>
                 </div>
      `;
      })
      .join("");
  }
});

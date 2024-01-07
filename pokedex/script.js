const poke_container = document.getElementById("poke-container");
const pokemon_count = 200;
const colors = {
  fire: "#fddfdf",
  grass: "#defde0",
  electric: "#def3fd",
  fairy: "#fceaff",
  poison: "#98d7a5",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  bug: "#f8d5a3",
  water: "#def3fD",
  normal: "#f5f5f5",
  fighting: "#e6e0d4",
  flying: "#f5f5f5",
  psychic: "#eaeda1",
  ghost: "#f8f8f2",
  ice: "#e0fcff",
  dragon: "#97b3e6",
  dark: "#f8f8f2",
  steel: "#f5f5f5",
};

const main_type = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");

  const poke_types = pokemon.types.map((type) => type.type.name);

  const type = main_type.find((type) => poke_types.indexOf(type) > -1);

  const color = colors[type];
  // Extract abilities
  const abilities = pokemon.abilities.map((ability) => ability.ability.name);

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
 <div class=>
 <div class="img-container">
 <img
   src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
     pokemon.id
   }.svg"
   alt=""
 />
</div>
<div class="info">
 <span class="number">#${id}</span>
 <h3 class="name">${name}</h3>
  <small class="type">Types: 
   ${poke_types.map((type) => `<span">${type}</span>`).join(", ")}
 </small>
 <ul>
 ${abilities.map((ability) => `<li class="ability">${ability}</li>`).join("")}
</ul>
</div></div>
`;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
};

fetchPokemons();

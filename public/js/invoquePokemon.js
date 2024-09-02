const invoquePokemon = () => {
  const pokeBtn = document.getElementById("pokemon");

  pokeBtn.addEventListener("click", fetchPokemon);
  
  const pokeDiv = document.getElementById("pokemon-info");
  const pokeP = document.getElementById("pokeInfo");
  
  pokeDiv.appendChild(pokeP);
};

export default invoquePokemon;

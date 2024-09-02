const pokemonAbility = () => {
  const pokeAbilityBtn = document.getElementById("ability");

  pokeAbilityBtn.addEventListener("click", fetchPokemonAbilities);

  const pokeDiv = document.getElementById("pokemon-info");
  const pokeAbility = document.getElementById("pokeAbility");

  pokeDiv.appendChild(pokeAbility);
};

export default pokemonAbility;

const {getAllPokemon} = require("pkmonjs");

async function getAll() {
  const names = await getAllPokemon();
  console.log(Object.values(names).slice(1,149));
}
getAll();
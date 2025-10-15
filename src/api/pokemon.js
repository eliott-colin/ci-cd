import api from "./index";

export const fetchPokemonByGeneration = (generation) =>
  console.log(generation["_value"]) ||
  api
    .get(`/pokemon/generation/${generation["_value"]}`)
    .then((res) => res.data);

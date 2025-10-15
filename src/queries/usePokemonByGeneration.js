import { useQuery } from "@tanstack/vue-query";
import { fetchPokemonByGeneration } from "@/api/pokemon";

export function usePokemonByGeneration(generation) {
  return useQuery({
    queryKey: ["pokemonByGen", generation],
    queryFn: () => fetchPokemonByGeneration(generation),
    enabled: !!generation,
    staleTime: 1000 * 60 * 5,
  });
}

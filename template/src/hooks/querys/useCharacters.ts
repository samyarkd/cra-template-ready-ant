import { useQuery } from "@tanstack/react-query";
import rickAndMortyService from "services/rickAndMorty";

const RickAndMortyService = new rickAndMortyService();

function useCharacters() {
  const query = useQuery(["character"], RickAndMortyService.getCharacters);
  return query;
}

export default useCharacters;

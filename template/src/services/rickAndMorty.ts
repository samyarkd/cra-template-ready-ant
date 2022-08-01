import { GetRickAndMorty } from "utils/typesAndInterfaces";
import apiClient from "./apiClient";

class rickAndMortyService {
  getCharacters = async () => {
    const response = await apiClient.get<GetRickAndMorty>("character");
    return response.data;
  };
}

export default rickAndMortyService;

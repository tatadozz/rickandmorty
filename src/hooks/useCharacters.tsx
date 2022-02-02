import { useQuery } from "react-query";

async function fetchData() {
    const result = await fetch(`https://rickandmortyapi.com/api/character/`);
    const json = await result.json();
    return json;
}

export function useCharacters() {
    return useQuery(["characters"], fetchData);
}

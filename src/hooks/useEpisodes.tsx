import { useQuery } from "react-query";

async function fetchData() {
    const result = await fetch(`https://rickandmortyapi.com/api/episode/`);
    const json = await result.json();
    return json;
}

export function useEpisodes() {
    return useQuery(["episodes"], fetchData);
}

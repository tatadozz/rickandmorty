import { useQuery } from "react-query";

async function fetchData() {
    const result = await fetch(`https://rickandmortyapi.com/api/location/`);
    const json = await result.json();
    return json;
}

export function useLocations() {
    return useQuery(["locations"], fetchData);
}

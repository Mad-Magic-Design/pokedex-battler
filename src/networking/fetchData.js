export const getPokemonById = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
    const data = await response.json()
    return data

}




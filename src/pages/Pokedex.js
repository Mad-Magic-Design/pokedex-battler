import React from "react"
import { useState } from "react"
import { getPokemonById } from "../networking/fetchData"

export default function Pokedex() {
    const [id, setId] = useState(1)
    const [pokemonObj, setPokemonObj] = React.useState()
    const [displayIdError, setDisplayIdError] = useState(false)

    const handleIdChange = (e) =>{
        setId(e.target.value)
    }

    const handleIdSubmit = async() =>{
        if (id > 0 && id <=151){
            setDisplayIdError(false)
            const data = await getPokemonById(id)
            if (data) setPokemonObj(data)
        }
        else{
            setId(1)
            setDisplayIdError(true)
        }
    }

  return (
    <>
        {displayIdError && <p style={{color: 'red'}}>Please choose a pokemon with an id 1 - 151</p>}
        <label htmlFor="id-input">Choose Your Pokemon</label>
        <input aria-label='Id for the pokemon you want to load into the pokedex' id='id-input' type='number' value={id} onChange={handleIdChange}/>
        <button onClick={handleIdSubmit}>I Choose You</button>
        <section>
            {pokemonObj && <>
                <h1>{pokemonObj.name}</h1>
                <img src={pokemonObj.sprites.front_shiny} alt={`a shiny sprite of ${pokemonObj.name}`}/>
                {pokemonObj.types.map(type=> <p>{type.type.name}</p>)}
            </>}

        </section>
    </>
  )
}

import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        const comingData = async() => {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            setCharacters(response.data.results);
        }
        comingData();
    },[])

    return (
        <CharacterContext.Provider value={[characters, setCharacters]}>
            {props.children}
        </CharacterContext.Provider>
    )
}
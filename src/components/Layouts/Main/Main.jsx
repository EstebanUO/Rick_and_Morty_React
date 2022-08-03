import React from 'react'
import { useEffect, useState } from 'react'
import { Characters } from '../../UI/Characters/Characters'
import { Input } from '../../UI/Input/Input'

export const Main = () => {

    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        const URL = 'https://rickandmortyapi.com/api/character'

        const asyncFetchData = async() =>{
            const res = await fetch(URL)
            const data = await res.json()
            console.log(data.results);
            setCharacters(data.results)
        }
        asyncFetchData();
    }, [])

    const [texto, setTexto] = useState('');

    const inputCharacters = characters.filter((character) => character.name.toLocaleLowerCase().includes(texto.toLowerCase())

  return (
    <div>
        <Input texto={texto} setTexto={setTexto}/>
        <Characters characters={inputCharacters}/>
    </div>
  )
}

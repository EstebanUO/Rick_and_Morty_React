import React from 'react'

export const MainCards = ({character}) => {
  return (
    <div className='container'>
        <div className='container2'>
            <div>
                <img src={character.image} alt="" className='imgs'/>
            </div>
            <div className='description'>
                <h2>{character.name}</h2>
                <p>{character.species}</p>
                <p>{character.status}</p>
            </div>
        </div>
    </div>
  )
}

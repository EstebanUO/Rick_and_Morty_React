import React from 'react';
import { MainCards } from '../MainCards/MainCards';

export const Characters = ({characters}) => {
  return (
    <div>
        <div className="container">
            {characters.map(character => <MainCards character={character}/>)}
        </div>
    </div>
  )
}

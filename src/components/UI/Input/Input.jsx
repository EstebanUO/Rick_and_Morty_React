import React from 'react'

export const Input = ({texto, setTexto}) => {

  const inputLoad = (event) => {
    setTexto(event.target.value)
    console.log(texto);
  }

  return (
    <div>
      <div className="elinput">
        <input id='elinput' type="text" className="input" value={texto} onChange={inputLoad} placeholder="Ingresa un nombre?"/>
      </div>
    </div>
  )
}

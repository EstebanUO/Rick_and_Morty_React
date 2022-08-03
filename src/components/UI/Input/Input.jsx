import React from 'react'

export const Input = ({texto, setTexto}) => {

  const inputLoad = (event) => {
    setTexto(event.target.value)
    console.log(event.target.value);
  }

  return (
    <div className="elinput">
        <input type="text" className="input" value={texto} onChange={inputLoad} placeholder="Ingresa un nombre?"/>
    </div>
  )
}

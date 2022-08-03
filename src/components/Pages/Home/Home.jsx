import React from 'react'
import { HeaderHome } from '../../Layouts/HeaderHome/HeaderHome'
import { Main } from '../../Layouts/Main/Main'

export const Home = () => {
  return (
    <div className="banner">
        <HeaderHome/><br />
        <Main />
    </div>
  )
}
import React from 'react'
import '../assets/styles/components/Search.scss'
import classNames from 'classnames'

const Search = ({isHome}) => {
  const inputStyles = classNames('input', {
    isHome
  })

  return(
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyles} placeholder="Buscar..."></input>
    </section>
)}

export default Search

import React from 'react'

const MenuItem = () => {
  return (
    <article>
        {/*Pegando a imegem e o título*/}
        <img src={img} alt={titulo}></img>
        <div>
            <header>
                <h4>{titulo}</h4>
                {/* Pega o preço*/}
            </header>
            
        </div>
    </article>
  )
}

export default MenuItem
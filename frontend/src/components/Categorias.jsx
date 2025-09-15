import React from 'react'

const Categorias = (categorias, filtroItems) => {
  return (
    <nav>
        {/* Cria um array que pega todas as categorias e passa categoria por categoria usando um index com referência (uma forma de numerar o array)*/}
        {categorias.map((categorias,index)=>{
            <button key={index} onClick={() => {filtroItems(categorias)}}>
                {categoria}
            </button>
        })}
    </nav>
  )
}

export default Categorias
import React from 'react'

const MenuItem = ({titulo,img,preco,descricao}) => {
  return (
    <article className=''>
        {/*Pegando a imagem e o título*/}
        <img src={img} alt={titulo} className='rounded-3xl'></img>
        <div >
            <header>
                <h4>{titulo}</h4>
                {/* Pega o preço e formata até duas casas decimais*/}
                <p className='font-bold'>R$ {preco.toFixed(2)}</p>
            </header>
            <p>{descricao}</p>
        </div>
    </article>
  )
}

export default MenuItem
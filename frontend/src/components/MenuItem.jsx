import React from 'react'

const MenuItem = ({titulo,img,preco,descricao}) => {
  return (
  <article className="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    {/*Pegando a imagem e o título*/}
      <img src={img} alt={titulo} className="w-full h-52 object-cover rounded-t-xl" />
      <div className="p-5 flex flex-col flex-grow">
        <header className="flex justify-between items-baseline border-b-2 border-orange-200 pb-2 mb-4">
          <h4 className="text-xl text-slate-800 capitalize font-medium">{titulo}</h4>
          {/* Pega o preço e formata até duas casas decimais*/}
          <p className="text-xl text-orange-500 font-bold">R$ {preco.toFixed(2)}</p>
        </header>
        <p className="text-base text-gray-700 flex-grow leading-relaxed">{descricao}</p>
      </div>
    </article>
  )
}

export default MenuItem
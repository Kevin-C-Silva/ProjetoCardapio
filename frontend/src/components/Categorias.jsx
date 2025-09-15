const Categorias = ({categorias, filtroItems}) => {
  return (
    <nav>
        {/* Cria um array que pega todas as categorias e passa categoria por categoria usando um index com referência (uma forma de numerar o array)*/}
        {categorias.map((categoria,index)=>{
            <button key={index} onlick={() => {filtroItems(categoria)}}>
                {categoria}
            </button>
        })}
    </nav>
  )
}

export default Categorias
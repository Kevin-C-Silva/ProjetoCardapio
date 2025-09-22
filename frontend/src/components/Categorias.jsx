const Categorias = ({ categorias, filtroItems }) => {
  // Função auxiliar para retornar o ícone correto para cada categoria
  const getIcon = (categoria) => {
    switch(categoria.toLowerCase()) {
      case 'gamer':
        return;
      case 'rpg':
        return ;
      case 'aventura':
        return ;
      case 'acao':
        return;
      default:
        return null; // Nenhum ícone para a categoria 'todos'
    }
  };

  return (
    <nav className="flex justify-center flex-wrap gap-4 mb-12">
      {/* Cria um array que pega todas as categorias e passa categoria por categoria usando um index com referência (uma forma de numerar o array)*/}
      {categorias.map((categoria, index) => (
        <button
          key={index}
          onClick={() => filtroItems(categoria)}
          className="bg-slate-800 text-white border-none rounded-lg px-5 py-3 text-base capitalize cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-orange-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          {getIcon(categoria)}
          {categoria}
        </button>
      ))}
    </nav>
  );
};

export default Categorias
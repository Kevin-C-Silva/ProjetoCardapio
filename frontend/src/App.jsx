import { useState } from "react"
import Menu from "./components/Menu.jsx"
import Categorias from "./components/Categorias.jsx"
import dados from "./data/dados.js"

// Obtém todas as categorias únicas do menu, adicionando todas no ínicio
const todasCategorias = ['todos', ... new Set(dados.map(item => item.categoria))]

function App() {

  // hook - useState - Manipula o estado da variável
  const [menuItems, setMenuItems] = useState(dados);
  const [categorias, setCategorias] = useState(todasCategorias);

  const filtroItems = (categoria) => {
    if (categoria == "todos")
      setMenuItems(dados); // Mostra todos os items da lista
    else {
      const novoItem = dados.filter((item) => item.categoria === categoria)
      setMenuItems(novoItem); // Mostra apenas os items filtrados
    }
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-700 font-sans flex flex-col">
        <header className="py-12 bg-white shadow-sm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-4xl text-slate-800 font-bold uppercase tracking-wider mb-2">
              Cardápio Fiap
            </h1>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
        </header>

        <main className="flex-grow py-10 px-4">
          <section className="container mx-auto max-w-7xl">
            <Categorias categorias={categorias} filtroItems={filtroItems} />
            <Menu items={menuItems} />
          </section>
        </main>

        <footer className="bg-slate-800 text-white text-center p-5 mt-10">
          <p className="text-sm">&copy; 2025 - Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  )
}

export default App

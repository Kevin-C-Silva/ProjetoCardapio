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
      <main>
        <section className="bg-green-500 p-5">
          <header>
            <h2 className="mb-6 font-extrabold text-center">Cardárpio City</h2>
            <div className="linha"></div>
          </header>
          <Categorias categorias={categorias} filtroItems={filtroItems} />
          <Menu items={menuItems} />
        </section>
      </main>
      <footer id="footer"> &copy; - todos os direitos reservados</footer>
    </>
  )
}

export default App

import MenuItem from './MenuItem.jsx'

// Destruct - Acessa propriedades de outro local
const Menu = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Criando a função que vai percorrer item por item por id
        {...} - operador spread - pega os dados já conhecidos
        */}
        {items.map((item) =>( 
            <MenuItem key={item.id} {...item}/>
        ))}
    </div>
  )
}

export default Menu
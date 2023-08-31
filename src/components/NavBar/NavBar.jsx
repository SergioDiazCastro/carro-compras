
import { NavLink } from 'react-router-dom'

import carrito from '../NavBar/images/carro-de-la-compra.png'


export const NavBar = ({count}) => {
  return (
    <div className='text-center'>
    <nav>
        <ul className='flex items-center text-2xl  font-semibold text-white'>
          <li className='w-[100%]'><NavLink to='/'>Inicio</NavLink></li> 
          <li className=''><img className='w-[25%]' src={carrito} />
          <span className="bg-black p-1 rounded-full">{count}</span> </li>
        </ul>
    </nav>
    </div>
  )
}

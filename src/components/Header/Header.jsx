import carrito from '../Header/images/carro-de-la-compra.png'
import { Logo } from "../Logo/Logo"
import { NavLink } from 'react-router-dom'


export const Header = ({count}) =>{
    return(
        <div className='bg-blue-950 flex justify-around'>
            <Logo></Logo>
            <nav>
        <ul className='flex items-center text-2xl  font-semibold text-white'>
          <li className='w-[100%]'><NavLink to='/'>Inicio</NavLink></li> 
          <li className='flex'><img className='w-[25%]' src={carrito} />
          <p className=" rounded-full w-min  text-[15px]">{count}</p></li>
        </ul>
    </nav>
        </div>
    )
}
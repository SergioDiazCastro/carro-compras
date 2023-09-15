import { useState } from 'react'
import carrito from '../Header/images/carro-de-la-compra.png'
import { Logo } from "../Logo/Logo"
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'






export const Header = ({count, selectedProduct}) =>{
    const [modalIsOpen, SetModalIsOpen] = useState(false);
    return(
        <div className='bg-blue-950 flex justify-center items-center '>
            <Logo></Logo>
    <nav>
        <ul className='flex items-center text-2xl  font-semibold text-white'>
          <li className='w-[100%]'><NavLink to='/'>Inicio</NavLink></li> 
          <li className='flex h-full'><img onClick={() => SetModalIsOpen(true)} className='w-[25%]' src={carrito} />
          <p className="items-center text-[15px] w-4 text-white ">{count}</p></li>
        </ul> 
    </nav>
          
          <Modal isOpen={modalIsOpen} onRequestClose={() => SetModalIsOpen(false)}
            className='mx-auto my-20 p-4 bg-blue-950 w-[30%]'>
           <li className='text-white '>{selectedProduct +"\n"}</li>
           
        <button onClick={() => SetModalIsOpen(false)} 
        className='bg-white w-1/2 flex self-center justify-center mt-10'>Cerrar</button>
        </Modal>
        
        </div>
    )
}
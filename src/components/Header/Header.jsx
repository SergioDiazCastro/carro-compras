import { NavBar } from "../NavBar/NavBar"
import { Logo } from "../Logo/Logo"

export const Header = ({count}) =>{
    return(
        <div className='bg-blue-950 flex justify-around'>
            <Logo></Logo>
            <NavBar count={count}></NavBar>
        </div>
    )
}
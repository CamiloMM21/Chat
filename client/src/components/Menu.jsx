import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Menu() {

    const openMenu = () => {
        let menu = document.getElementById('menu');
        if( menu.classList.contains('hidden') ) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }

    const {dispatch} = useContext(AuthContext);

    const logOut = () => {
        dispatch({type:"LOGOUT"});
    }

    return (
        <div>
            <nav className="bg-bggray py-5">
                <div className="container mx-auto flex px-36">
                    <div className="flex flex-grow justify-between">
                        <div>
                            <a className="flex text-white text-xl items-center" href="#">
                                <img className="mr-4" src="./img/flor.png" alt="Comemerce Max Logo" width="48" height="45" />
                                Commerce Max
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <img src="./img/HamburguerMenu.svg" alt="Hamburguer Menu Icon" onClick={openMenu}/>
                        </div>
                        <div id="menu" className="lg:flex hidden items-center absolute lg:relative lg:top-0 top-20 left-0 bg-bggray w-full lg:w-auto py-14 lg:py-0 px-8">
                            <div className="flex flex-col lg:flex-row">
                                <a onClick={logOut} href="#" className="text-gray-400 hover:text-gray-200 lg:mr-7 mb-8 lg:mb-0">Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu
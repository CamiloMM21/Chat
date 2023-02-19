import Signin from './Signin';
import Signup from './Signup';

function Home() {

    const openMenu = () => {
        let menu = document.getElementById('menu');
        if( menu.classList.contains('hidden') ) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
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
                                <a className="text-gray-400 hover:text-gray-200 lg:mr-7 mb-8 lg:mb-0" href="#" data-modal-target="signInModal" data-modal-toggle="signInModal">Sign In</a>
                                <a className="text-gray-400 hover:text-gray-200" href="#" data-modal-target="signUpModal" data-modal-toggle="signUpModal">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="bg-bggray py-5 heightscreen">
                <div className="grid grid-rows-1 grid-flow-col gap-5 flex justify-center items-center">
                    <div className="flex items-center flex-col">
                        <img src="./img/flor.png" alt="Commerce Max Icon" />
                        <h1 className="text-white text-8xl text-center">COMMERCE MAX</h1>
                        <div className="mt-14">
                            <button className="btn mr-8" data-modal-target="signInModal" data-modal-toggle="signInModal">Sign In</button>
                            <button className="btn ml-8" data-modal-target="signUpModal" data-modal-toggle="signUpModal">Sign Up</button>
                        </div>
                    </div>
                    <div>
                        <img className="img-fluid" src="../img/Icon.png" alt="Commerce Max Icon" />
                    </div>
                </div>
            </div>
            <Signin />
            <Signup />
        </div>
    )
}

export default Home
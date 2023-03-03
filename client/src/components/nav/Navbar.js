import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


function Navbar() {
    
    const {dispatch} = useContext(AuthContext);
    
    const logOut = () => {
        dispatch({type:"LOGOUT"});
    }
    
    const userInfo = useContext(AuthContext);
    console.log(userInfo.currentUser);
    
    return (
        <div>
            <nav class="fixed top-0 z-50 w-full bg-bggray border-b border-gray-500">
                <div class="px-3 py-5 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" class="flex md:mr-24">
                                <img className="h-10 mr-3" src="./img/flor.png" alt="Comemerce Max Logo" width="42" />
                                <span class="self-center text-xl text-white font-semibold sm:text-2xl whitespace-nowrap">Commerce Max</span>
                            </a>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ml-3">
                                <div>
                                    <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="w-10 h-10 rounded-full" src={userInfo.currentUser.photoURL || "http://cdn.onlinewebfonts.com/svg/img_184513.png"} alt="user photo" />
                                    </button>
                                </div>
                                <div class="z-50 hidden my-4 text-base list-none bg-bggray divide-y divide-gray-600 rounded shadow" id="dropdown-user">
                                    <div class="px-4 py-3" role="none">
                                        <p class="text-sm text-white" role="none">
                                        {userInfo.currentUser.displayName}
                                        </p>
                                        <p class="text-sm font-medium text-gray-300 truncate" role="none">
                                        {userInfo.currentUser.email}
                                        </p>
                                    </div>
                                    <ul class="py-1" role="none">
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">Mi Perfil</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">Mis Publicaciones</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">Configuración</a>
                                        </li>
                                        <li>
                                            <a onClick={logOut} href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">Log Out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform -translate-x-full bg-bggray border-r border-gray-500 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-bggray">
                    <ul class="space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                <svg fill="currentColor" class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"></path></svg>
                                <span class="ml-3">Menú Principal</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span class="ml-3">Mis Publicaciones</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                <svg fill="currentColor" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path></svg>
                                <span class="ml-3">Mi Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                            <svg fill="currentColor" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"></path><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Vender</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Categorias</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                <svg fill="currentColor" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Favoritos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Historial</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                            <svg fill="currentColor" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Buzon</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                <svg fill="currentColor" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Configuración</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                <svg fill="currentColor" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Ayuda</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={logOut} href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            </div>
        </div>
)
}
export default Navbar
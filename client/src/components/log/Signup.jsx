import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../database/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user});
                navigate("/menu");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
            // SIGN UP MODAL
            <div id="signUpModal" tabIndex="-1" aria-hidden="true" className="fixed bg-black bg-opacity-25 backdrop-blur-sm top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-2xl md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-bggray rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-white">
                            Sign Up
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="signUpModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="py-6 px-14">
                        <div className="flex justify-center">
                            <img src="./img/login-icon.svg" alt="login-icon" style={{ height: 7 + 'rem' }} />
                        </div>
                        <div className="text-center text-4xl font-bold text-white">Registrarse</div>
                        <div className="container">
                            <form onSubmit={handleSignup}>
                                <div className="grid grid-flow-row auto-rows-max">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <div className="mt-6 text-white">
                                                <input type="email" onChange={e => setEmail(e.target.value)} className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Correo" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mt-6 text-white">
                                                <input type="password" onChange={e => setPassword(e.target.value)} className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Contraseña" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <div className="mt-3 text-white">
                                                <input type="text" className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Usuario" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mt-3 text-white">
                                                <input type="text" className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Teléfono" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <div className="mt-3 text-white">
                                                <input type="text" className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ciudad" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mt-3 text-white">
                                                <input type="text" className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Barrio" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-5">
                                        <div>

                                        </div>
                                        <div className="col-span-2">
                                            <div className="mt-3 text-white">
                                                <input type="email" className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nombre Completo" />
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button data-modal-hide="signUpModal" type="submit" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg px-5 py-2 text-center w-full">Crear Cuenta</button>
                                </div>
                                <div className="flex justify-center mt-1 text-white gap-1">
                                    <div className="text-gray-400">Ya tienes una cuenta?</div>
                                    <a href="#" className="font-bold text-red-600" data-modal-hide="signUpModal" data-modal-target="signInModal" data-modal-toggle="signInModal">Inicia Sesión</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
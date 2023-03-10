import { useContext, useState } from 'react';
import { auth } from '../../database/firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext); 

    const handleSignin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                dispatch({type:"LOGIN", payload:user});
                navigate("/info");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            }) 
    }

    const signinGoogle = async (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        const credentials = await signInWithPopup(auth, provider)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch({type:"LOGIN", payload:user});
            navigate("/info");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }

    return (
            // SIGN IN MODAL
            <div id="signInModal" tabIndex="-1" aria-hidden="true" className="fixed bg-black bg-opacity-25 backdrop-blur-sm top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-lg md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-bggray rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-white">
                            Sign In
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="signInModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="py-6 px-14">
                        <div className="flex justify-center">
                            <img src="./img/login-icon.svg" alt="login-icon" style={{ height: 7 + 'rem' }} />
                        </div>
                        <div className="text-center text-4xl font-bold text-white">Login</div>
                        <form onSubmit={handleSignin}>
                            <div className="mt-6 text-white">
                                <label for="email" className="block mb-1 text-sm font-medium text-white">Correo</label>
                                <input type="email" onChange={e => setEmail(e.target.value)} className="bg-gray-600 border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@email.com" required />
                            </div>
                            <div className="mt-2 text-white">
                                <label for="password" className="block mb-1 text-sm font-medium text-white">Contraseña</label>
                                <input type="password" onChange={e => setPassword(e.target.value)} className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="••••••••" required />
                            </div>
                            <div className="mt-8">
                                <button type="submit" data-modal-hide="signInModal" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg px-5 py-2 text-center w-full">Login</button>
                            </div>
                            <div className="flex justify-center mt-1 text-white gap-1">
                                <div className="text-gray-400">No tienes una cuenta?</div>
                                <button className="font-bold text-red-600" data-modal-hide="signInModal" data-modal-target="signUpModal" data-modal-toggle="signUpModal">Regístrate</button>
                            </div>
                            <div className="mt-2 p-3">
                                <div className="border-b-2 border-white text-center" style={{ height: 0.9 + 'rem' }}>
                                    <span className="bg-bggray text-gray-400 px-3">or</span>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center gap-3 text-white bg-transparent border boder-white hover:bg-white transition duration-500 hover:text-bggray focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg px-5 py-2 text-center w-full">
                                <img src="./img/google-icon.svg" alt="google-icon" style={{ height: 1.6 + 'rem' }} />
                                <button onClick={signinGoogle} data-modal-hide="signInModal" className="">Continuar con Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
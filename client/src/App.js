import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
import Home from './components/log/Home';
import ModificacionPerfil from './page/ModificacionPerfil';
import Information from './page/Information';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './page/Menu';
import { AuthContext } from './context/AuthContext';


function App() {
    // Creacion de funcion "RequireAuth" para controlar accesos a rutas por medio de "currentUser"
    const {currentUser} = useContext(AuthContext);
    const RequireAuth = ({ children }) => {
        return currentUser ? (children) : <Navigate to="/" />
    }

    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}>
                </Route>
                <Route
                    path='/menu'
                    element={<RequireAuth><Menu /></RequireAuth>}
                    exact>
                </Route>
                <Route
                    path='/ProfileM'
                    element={<ModificacionPerfil />}>
                </Route>
                <Route
                    path='/info'
                    element={<Information />}>
                </Route>
            </Routes>
        </Router>
        // <Navbar />
        // <Login />
    )
}

export default App
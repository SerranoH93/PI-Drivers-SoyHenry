import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';
import Home from './components/home/Home.jsx';
import LandingPage from './components/landingpage/LandingPage.jsx';
import NotFound from './components/notfound/NotFound.jsx';


function App() {
    
    const location = useLocation();

    function logout() {
        navigate('/');
    }

    return (
        <div>            
            <Routes>
                <Route
                    path='/'
                    element={<LandingPage />}
                />
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/form"
                    element={<Form />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/detail/:id"
                    element={<Detail />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </div>
    );
    
}
export default App
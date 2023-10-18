import React, {useState} from 'react';
import './assets/style/jetbrains.css';
import './assets/style/jetbrains-components.css';
import './assets/style/bootstrap-grid.css';
import './assets/style/contest-main.css';
import Task from "./pages/Task/Task";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './assets/js/jetbrains.js';
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Tasks from "./pages/Tasks/Tasks";
import {BrowserRouter, Route, Routes, redirect} from "react-router-dom";
import axios from "axios";
import apiAuth from "./shared/service/axios/apiAuth";
import Logout from "./pages/Logout/Logout";

function App() {

    const auth = localStorage.getItem('auth')
    const apiUrl = '/auth/user'

    const [authCheckEnd, setAuthCheckEnd] = React.useState(null);
    const [authCheck, setAuthCheck] = React.useState(null);
    const [user, setUser] = React.useState(null);

    if (!authCheckEnd){
        apiAuth.get(apiUrl).then((resp) => {
            setUser(resp.data)
            setAuthCheck(true)
            setAuthCheckEnd(true)
        }).catch((reason) => {
            setAuthCheck(false)
            setAuthCheckEnd(true)
        });
    }else{

        return (
            <BrowserRouter>

                <div className="page">
                    <Header auth={{ authCheck: authCheck}} user={{ user: user }} />

                    <Routes>
                        <Route path='/tasks/:id' element={<Task auth={{ authCheck: authCheck}} />} />
                        <Route path='/tasks' element={<Tasks auth={{ authCheck: authCheck}} />} />
                        <Route path='/login' element={<Login auth={{ authCheck: authCheck}} />} />
                        <Route path='/register' element={<Register auth={{ authCheck: authCheck}} />} />
                        <Route path='/logout' element={<Logout props={{ authCheck: authCheck}} />} />
                    </Routes>


                    <Footer></Footer>

                </div>
            </BrowserRouter>
        );

    }
}

export default App;

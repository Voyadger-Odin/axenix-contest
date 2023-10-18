
import './login.css';
import {useState} from "react";
import axios from 'axios';
import {Navigate} from "react-router-dom";

function App({auth}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Если авторизованы
    if (auth['authCheck']){
        return <Navigate to='/tasks' />
    }else{
        function login() {
            const apiUrl = 'http://134.0.116.26:5552/api/auth';
            const data = {
                "username": username,
                "hash": password
            }
            axios.post(apiUrl, data).then((resp) => {
                localStorage.setItem('auth', resp.data['access_token'])
                window.location.replace('/tasks');
            }).catch((reason) => {
                console.log(reason)
            });
        }

        return (
            <div className="main-panel align-items-center">
                <div className="block login-block">
                    <h4>Авторизация</h4>

                    <hr className="mt-3" />

                    <form>
                        <div className="mt-4">
                            Username or email *
                            <input value={username} onChange={(e) => setUsername(e.target.value)} className="input mt-1" placeholder="login" />
                        </div>

                        <div className="mt-3">
                            Password *
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="input mt-1" type="password" placeholder="password" />
                        </div>

                        <button onClick={login} type="button" className="btn btn-mono btn-min-size mt-3 w-100">Войти</button>
                    </form>

                    <br />
                    Нет аккаунта? <a className="link" href="/register">Регистрация</a>
                </div>
            </div>
        );
    }


}

export default App;

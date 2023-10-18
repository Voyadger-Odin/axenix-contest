
import './login.css'
import {useState} from "react";

function App() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [icon, setIcon] = useState('')

    return (
        <div className="main-panel align-items-center">
            <div className="block login-block">
                <h4>Регистрация</h4>

                <hr className="mt-3" />

                    <form>
                        <div className="mt-4">
                            Username *
                            <input value={username} onChange={(e) => setUsername(e.target.value)} className="input mt-1" placeholder="login" />
                        </div>

                        <div className="mt-3">
                            Password *
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="input mt-1" type="password" placeholder="password" />
                        </div>

                        <div className="mt-4">
                            Icon *
                            <input value={icon} onChange={(e) => setIcon(e.target.value)} className="input mt-1" type="email" placeholder="icon" />
                        </div>

                        <button type="submit" className="btn btn-mono btn-min-size mt-3 w-100">Регистрация</button>
                    </form>

                    <br />

                    Уже есть аккаунт? <a className="link" href="/login">Войти</a>
            </div>
        </div>
    );
}

export default App;

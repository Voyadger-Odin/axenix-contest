
import {Navigate} from "react-router-dom";

function App(auth) {
    // Если авторизованы
    if (auth['props']['authCheck']){
        localStorage.removeItem('auth')
        return <Navigate to='/login' />
    }else{
        return <Navigate to='/tasks' />
    }


}

export default App;

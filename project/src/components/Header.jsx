

function App({auth, user}) {
    if (auth['authCheck']){
        return (
            <header className="d-flex flex-wrap justify-content-md-between mb-4 px-4 border-bottom">
                <div className="gradient"></div>
                <a href="#" className="link link-default link-underline-none tb ms-2 d-flex align-items-center" >
                    <h6>{user['user']['username']}</h6>
                </a>

                <div className="text-end d-inline-flex align-items-center">
                    <a className="link link-default tb ms-3 d-inline-flex align-items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github me-2" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg> GitHub</a>
                    <a className="link link-default tb ms-3 d-inline-flex align-items-center" href="/">Главная</a>
                    <a className="link link-default tb ms-3 d-inline-flex align-items-center" href="/tasks">Тесты</a>
                    <a className="link link-default tb ms-3 d-inline-flex align-items-center" href="/logout">Выйти</a>
                </div>
            </header>    );

    }else{
        return (
            <header className="d-flex flex-wrap justify-content-md-between mb-4 px-4 border-bottom">
                <div className="gradient"></div>
                <a href="#" className="link link-default link-underline-none tb ms-2 d-flex align-items-center" >
                    <h6>Team 2</h6>
                </a>

                <div className="text-end d-inline-flex align-items-center">
                    <a className="link link-default tb ms-3 d-inline-flex align-items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github me-2" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg> GitHub</a>
                    <a className="link link-default tb ms-3 d-inline-flex align-items-center" href="/">Главная</a>
                    <a className="link link-default tb ms-3 d-inline-flex align-items-center" href="/login">Логин</a>
                </div>
            </header>    );

    }
}

export default App;

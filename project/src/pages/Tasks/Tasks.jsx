
import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import apiAuth from "../../shared/service/axios/apiAuth";

function App({auth}) {

    const [tasks, setTasks] = React.useState(null);
    const [tasksLoaded, setTasksLoaded] = React.useState(null);

    if (!auth['authCheck']){
        return <Navigate to='/login' />
    }else{

        if (!tasksLoaded) {
            const apiUrl = '/tasks'
            apiAuth.get(apiUrl).then((resp) => {
                const tasks = resp.data

                console.log(tasks)

                setTasks(tasks)
                setTasksLoaded(true)
            }).catch((reason) => {

            })
        }else{
            return (
                <div className="main-panel align-items-center p-5">
                    <h1>Тесты</h1>
                    <p className="lead mt-3">Создавайте задания для своей компании, чтобы лучше отбирать и тестировать персонал</p>

                    <div className="content-wrapper">
                        <div className="row">
                            {tasks.map((task) => (
                                <div className="col-xl-3 col-sm-6 mt-4 grid-margin stretch-card">
                                    <div className="card circle-background" hovercolor="#55f3">
                                        <a href={`/tasks/${task['uuid']}`} className="link">

                                            <div className="task-card">
                                                <div className="task-card-text">
                                                    <h3 className="mb-0">{task['title']}</h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );

        }
    }
}

export default App;

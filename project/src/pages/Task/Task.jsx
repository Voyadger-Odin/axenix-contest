import React, {useState} from 'react';
import Editor from "../../components/Editor/Editor";
import EditorOpponent from "../../components/Editor/Editor-opponent";
import Markdown from "react-markdown"
import {Routes, Route, useParams, Navigate} from 'react-router-dom';
import apiAuth from "../../shared/service/axios/apiAuth";

function App({auth}) {

    let { id } = useParams();

    const [task, setTask] = React.useState(null);
    const [taskLoaded, setTaskLoaded] = React.useState(null);
    const [socket, setSocket] = React.useState(null);



    const [jwt, setJWT] = useState('');

    if (!auth['authCheck']){
        return <Navigate to='/login' />
    }else{

        if (!taskLoaded){
            const apiUrl = '/tasks/' + id
            apiAuth.get(apiUrl).then((resp) => {
                const task = resp.data

                setTask(task)
                setTaskLoaded(true)
            }).catch((reason) => {

            })
        }else{
            if (socket === null){
                setSocket(new WebSocket(`ws://134.0.116.26:4442?taskId=${id}`))
            }else{
                socket.onopen = function(e) {

                };

                socket.onmessage = function(event) {
                    const data = JSON.parse(event.data)
                    console.log(event.data)
                    if (data['event'] === 'connect'){
                        console.log(data['event'], data['data'])
                        const apiUrl = '/auth/user'
                        const payload = {
                            connId: data['data']
                        }
                        apiAuth.put(apiUrl, payload).then((resp) => {
                            socket.send({
                                'event': 'decline'
                            })
                            console.log(resp.data)
                        }).catch((reason) => {

                        })
                    }
                };
            }


            function print(data){
                socket.send({
                    event: 'pull',
                    data: data
                })
                console.log(data)
            }

            const markdown = task['description']

            return (
                <div className={'main-panel align-items-center mt-5'}>
                    <div className={'content-wrapper'}>

                        <Markdown>{markdown}</Markdown>

                        <div className={'row'}>
                            <div className={'col-xl-6 col-sm-6 grid-margin stretch-card'}>
                                <Editor onCangeGet={print}></Editor>
                                <br></br>
                                <button className="btn btn-primary btn-min-size">Отправить</button>
                            </div>

                            <div className={'col-xl-6 col-sm-6 grid-margin stretch-card'}>
                                <EditorOpponent></EditorOpponent>
                            </div>
                        </div>
                    </div>
                </div>            );
        }
    }
}

export default App;

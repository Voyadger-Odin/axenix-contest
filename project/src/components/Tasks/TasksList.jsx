
import {useState} from "react";
import {Navigate} from "react-router-dom";
import apiAuth from "../../shared/service/axios/apiAuth";

function App({auth}) {

    const apiUrl = '/tasks'
    apiAuth.get(apiUrl).then((resp) => {
        console.log(resp)
    }).catch((reason) => {

    })


    return (
        <></>
    );
}

export default App;

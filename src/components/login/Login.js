import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from '../../firebase';
import {useStateValue} from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Login() {

    const [stae, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="login">
            <div className="login--container">
                <img src="https://www.kansasfest.org/wp-content/uploads/slack.png" alt="Slack Logo" />
                <h1>Sign in to the Most Powerfull app</h1>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login;

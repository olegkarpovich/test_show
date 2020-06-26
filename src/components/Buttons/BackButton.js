import React from 'react'
import './style.scss';
import {useHistory} from "react-router-dom";

function BackButton() {
    let history = useHistory();
    return (
        <button id="back-to-show-button" onClick={() => history.goBack()}>Back</button>
    )
}

export default BackButton;

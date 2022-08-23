import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


function CountDown() {
    const [Time, setTime] = useState(0);
    const TimesUp = () => {
        setTime(Time + 1);
    }
    const TimesDown = () => {
        if (Time !== 0) {
            return setTime(Time - 1);
        } else {
            alert("Exit Limit")
        };
    }
    return ( <
        >
        <
        div className = 'main_div' >
        <
        div className = 'center_div' >
        <
        h1 > { Time } < /h1> <
        br / >
        <
        div className = 'btn_div' >
        <
        Button onClick = { TimesUp } >
        <
        AddIcon / >
        <
        /Button> <
        Button onClick = { TimesDown } >
        <
        DeleteIcon / >
        <
        /Button> <
        /div> <
        /div> <
        /div> <
        />

    );
}
export default CountDown;
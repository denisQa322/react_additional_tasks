import React, { useState } from "react";

export const UseStateComponent = () => {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
    }

    const onClickZero = () => {
        setA(0)
    }

    return(
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickZero}>0</button>
        </div>
    )
}
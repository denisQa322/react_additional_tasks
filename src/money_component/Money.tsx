import React from "react";
import { FilterType } from "../App"; 

type PropsType = {
    money: MoneyType[];
    changeFilter: (nameButton: FilterType) => void;
}

type MoneyType = {
    id: number
    banknote: string
    value: number
    number: string
}

export const MoneyComponent = (props: PropsType) =>{
    return(
        <div style={{display:'flex', flexDirection:'column'}}> 
            <ul>
                {
                props.money.map(m =>{
                return(
                    <li key={m.id}>
                    <span>{m.banknote}</span>
                    <span>{m.value}</span>
                    <span>{m.number}</span>
                    </li>
                )})}
            </ul>
            <div style={{marginLeft:'35px'}}>  
                <button onClick={() => {props.changeFilter('all')}}>All</button>
                <button onClick={() => {props.changeFilter('ruble')}}>Rubles</button>
                <button onClick={() => {props.changeFilter('dollar')}}>Dollars</button>
            </div>
    </div>
    )
}
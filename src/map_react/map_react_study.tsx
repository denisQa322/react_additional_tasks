
import React from "react";

type MapComponentType ={
    topCars: TopCarsType[]
}

type TopCarsType = {
    id: number,
    manufacturer: string, 
    model: string
}

export const MapComponent = (props: MapComponentType) => {
    return(
        <table>
            {props.topCars.map(cars => <tr key={cars.id}>
                <h1>
                    <th>car manufacturer: {cars.manufacturer};</th> 
                    <th> car model: {cars.model}</th>
                </h1>
            </tr>)}
        </table>
    );
}
import React from "react";

export function generate(){
    const numbers = [];
    for(let i = 0; i < 9 ; i++){
        numbers[i] = Math.floor(Math.random() * 1000);
    }

    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return(listItems);
}

import React, {useEffect, useState} from "react";

export default function Numbers() {

    const [list, setList] = useState([])

    useEffect(() => {
        generate()
    }, [])

    const generate = () => {
        setList(Array.apply(0, Array(10)).map(() => Math.floor(Math.random() * 100)))
    }

    return (
        <>
            <button onClick={generate}>Random</button>
            <ul>
                {list.map((number, i) => {
                    return <li key={i}>{number}</li>
                })}
            </ul>
        </>
    );
}
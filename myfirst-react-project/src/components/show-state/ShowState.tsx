import { useState } from "react";

export function ShowState() {
    // let name: string = 'Sara'
    const [name, setName] = useState('Sara')
    function changeName() {
        // name = 'Hellen'
        if (name === 'Sara') {
            setName('Hellen')
        } else {
            setName('Sara')
        }
        console.log(name);
    }
    return <div onClick={changeName}>{name}</div>
}

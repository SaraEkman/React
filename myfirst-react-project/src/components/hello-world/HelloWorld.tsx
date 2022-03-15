import "./HelloWorld.css";
import { IPerson } from "../../models/IPerson";

interface IHelloWorldProps{
    person: IPerson;
}

export function HelloWorld(props:IHelloWorldProps) {
    return (
        <div className="header">
            Hello World!  {props.person.name} age {props.person.age}
        </div>
    );
}
import "./HelloWorld.css";
interface IHelloWorldProps{
    name: string;
    age: number;
}

export function HelloWorld(props:IHelloWorldProps) {
    return (
        <div className="header">
            Hello World!  {props.name} age {props.age}
        </div>
    );
}
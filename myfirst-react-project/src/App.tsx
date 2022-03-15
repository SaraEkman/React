import './App.css';
import { Addition } from './components/addition/Addition';
import { HelloWorld } from './components/hello-world/HelloWorld';
import { IPerson } from './models/IPerson';

function App() {
  let p:IPerson = {name: "Sara", age: 22}
  return (
    <div>
      <HelloWorld person={p} />
      <Addition/>
    </div>
  );
}

export default App;

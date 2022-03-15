import './App.css';
import { HelloWorld } from './components/hello-world/HelloWorld';
import { ShowEvents } from './components/show-events/ShowEvents';
import { ShowState } from './components/show-state/ShowState';
import { IPerson } from './models/IPerson';

function App() {
  let p:IPerson = {name: "Sara", age: 22}
  return (
    <div>
      <HelloWorld person={p} />
      <ShowState />
      <ShowEvents />
    </div>
  );
}

export default App;

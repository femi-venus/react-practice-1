import "./App.css";
import Button from "./components/button/Button";
import Accordion from "./components/accordion/Accordion";
import Counter from "./components/counter/Counter";
import Dropdown from "./components/dropdown/Dropdown";
import { config } from "./config";
import Checklist from "./components/checklist/Checklist";
import Board from "./components/tic-tac-toe/Tictactoe";

function App() {
  return (
    <div className="App">
      <Button label="Save" type="save" />
      <Button label="Discard" type="discard" />
      {config.accordion.map((obj, index) => (
        <Accordion data={obj} key={index} />
      ))}
      <div>
        <Counter />
      </div>
      <div>
        <Dropdown options={config.dropdown} />
      </div>

      <div>
        <Checklist items={config.checklist} />
      </div>
      <div>
        <Board />
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import DemoFetchAPI from "./components/DemoFetchAPI";
import DemoAxios from "./components/DemoAxios";

function App() {
  return (
    <div className="App">
      <DemoFetchAPI />
      <DemoAxios />
    </div>
  );
}

export default App;

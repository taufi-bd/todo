import "./App.css";
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <InputTodo />
    </div>
  );
};

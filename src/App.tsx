import "./App.css";
import { Header } from "./components/Header";
import { Paper } from "./components/Paper";

function App() {
  return (
    <div className="flex flex-col items-center justify-end h-screen gap-16 App">
      <Header />
      <Paper />
    </div>
  );
}

export default App;

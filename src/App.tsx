import { Route, Routes } from "react-router-dom";
import { CentralNavBar } from "./components/CentralNavBar";
import { Driver as Hangman } from "./components/hangman/Driver";
import { Driver as Dropdown } from "./components/dropdown/Driver";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CentralNavBar />}>
        <Route index element={<Hangman />} />
        <Route path="dropdown" element={<Dropdown />} />
      </Route>
    </Routes>
  );
}

export default App;

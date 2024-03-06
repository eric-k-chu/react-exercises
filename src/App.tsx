import { Route, Routes } from "react-router-dom";
import { CentralNavBar } from "./components/CentralNavBar";
import { Welcome } from "./components/Welcome";
import { links } from "./lib/links";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CentralNavBar />}>
        <Route index element={<Welcome />} />
        {links.map((n) => (
          <Route key={n.path} path={n.path} element={n.element()} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

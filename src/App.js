import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Wether from "./Components/Wether";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wether />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

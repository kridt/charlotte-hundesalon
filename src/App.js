import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartSide from "./pages/StartSide";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartSide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

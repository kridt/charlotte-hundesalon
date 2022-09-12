import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Service from "./pages/Service";
import StartSide from "./pages/StartSide";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartSide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

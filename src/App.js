import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import About from "./pages/About";
import AddProduct from "./pages/AddProduct";
import Admin from "./pages/Admin";
import ChangeStock from "./pages/ChangeStock";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";
import Service from "./pages/Service";
import StartSide from "./pages/StartSide";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<StartSide />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/changeStock/:id" element={<ChangeStock />} />
              <Route path="/productSite/:id" element={<ProductPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

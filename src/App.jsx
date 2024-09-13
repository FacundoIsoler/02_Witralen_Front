import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
// import AdminHome from "./components/admin/dashborard/AdminHome.jsx";
// import SignUpStepsContainer from "./components/signUp/steps/SignUpStepsContainer.jsx";
// import Users from "./components/admin/dashborard/users/Users.jsx";
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
// import DashboardUser from "./components/user/dashboard/DashboarUser.jsx";
import './app.css';
import Products from "./components/products/Products.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="AppContainer">
        <Routes>
          {/* general */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          {/* admin */}
          <Route path="/admin" element={<Dashboard />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

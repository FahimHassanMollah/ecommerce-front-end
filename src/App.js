import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import Login from "./components/frontEnd/auth/Login";
import { Register } from "./components/frontEnd/auth/Register";
import MasterLayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

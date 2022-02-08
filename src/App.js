import  axios  from "axios";
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
import FrontEndLayout from "./layouts/frontEnd/FrontEndLayout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>

          <Route path="/admin" element={<MasterLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/" element={<FrontEndLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

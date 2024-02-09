import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import VehicleFormPage from './Components/VehicleFormPage';
import ContactPage from './Components/ContactPage';
import VehicleDetails from './Components/VehicleDetails';
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/auth/login' element={<LoginPage />} />
          <Route exact path='/auth/signup' element={<SignupPage />} />
          <Route exact path='/user/' element={<Dashboard />} />
          <Route exact path='/user/add/vehicle' element={<VehicleFormPage />} />
          <Route exact path='/user/vehicle/:vehicle_id' element={<VehicleDetails />} />
          <Route exact path='/contact/:vehicle_id' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

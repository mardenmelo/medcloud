import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../screens/Dashboard';


export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/addpatient" element={<Navigate to="/addpatient" />} />
      <Route path="/listpatient" element={<Navigate to="/listpatient" />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
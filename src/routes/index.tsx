import { Routes, Route, Navigate } from 'react-router-dom';
import { AddPatient } from '../screens/AddPatient';
import { Dashboard } from '../screens/Dashboard';
import { ListPatient } from '../screens/ListPatient';


export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/addpatient/:id" element={<AddPatient />} />
      <Route path="/addpatient/" element={<AddPatient />} />
      <Route path="/listpatient" element={<ListPatient />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
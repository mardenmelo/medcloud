import React from 'react';
import { Sidebar } from './components/Sidebar';
import { AppRoutes } from './routes';

function App() {
  return (
    <>
      <Sidebar>
        <AppRoutes />
      </Sidebar>
    </>
  );
}

export default App;

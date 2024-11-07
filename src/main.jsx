import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Index from './pages/index.jsx';
import Accueil from './pages/accueil/accueil.jsx';
import Medecins from './pages/accueil/medecins.jsx';
import Rapports from './pages/accueil/rapports.jsx';
import './pages/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: 'accueil',
    element: <Accueil />,

    children: [
      {
        path: 'medecins',
        element: <Medecins />
      },
      {
        path: 'rapports',
        element: <Rapports />

      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
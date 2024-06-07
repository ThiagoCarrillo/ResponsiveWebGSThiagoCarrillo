import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/login/Login.tsx';
import Plastico from './pages/plastico/Plastico.tsx';
import Pontos from './pages/pontos/Pontos.tsx';
import Mainpage from './components/mainpage/Mainpage.tsx';
import Cadastro from './pages/cadastro/Cadastro.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Mainpage/>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cadastro',
        element: <Cadastro />,
      },
      {
        path: '/plastico',
        element: <Plastico/>,
      },
      {
        path: '/pontos',
        element: <Pontos/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

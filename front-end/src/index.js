import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//paginas
import Filmes from './pages/Filmes/Filmes';
import Home from './pages/Home/Home';
import Perfil from './pages/Perfil/Perfil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },{
        path: "/Filmes",
        element: <Filmes/>,
      },{
        path: "/Perfil",
        element: <Perfil/>,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

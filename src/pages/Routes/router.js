import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Home'
import Logement from '../Logement'
import Apropos from '../Apropos'
import Erreur from '../Erreur'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/logement/:id',
        element: <Logement />,
      },
      {
        path: '/apropos',
        element: <Apropos />,
      },

      {
        path: '/*',
        element: <Erreur />,
      },
    ],
  },
])

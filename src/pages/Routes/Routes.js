import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ossature from '../../composant/Ossature/Ossature'
import Home from '../Home'
import Logement from '../Logement'
import Apropos from '../Apropos'
import Erreur from '../Erreur'

function Router() {
  return (
    <BrowserRouter>
      <Ossature>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </Ossature>
    </BrowserRouter>
  )
}
export default Router

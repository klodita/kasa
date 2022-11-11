import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Logement from '../Logement'
import Apropos from '../Apropos'
import Erreur from '../Erreur'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

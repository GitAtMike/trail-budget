import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import NewTrip from './pages/NewTrip'
import SavedTrips from "./pages/SavedTrips"

function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-trip" element={<NewTrip />} />
        <Route path="/saved-trips" element={<SavedTrips />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
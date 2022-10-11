import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Browse from '../pages/browse'

import LandingPage from '../pages/landingPage'

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/browse' element={<Browse />} />
      </Routes>
    </Router>
  )
}

export default RoutesComponent

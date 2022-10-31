import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Browse from '../pages/browse'

import LandingPage from '../pages/landingPage'
import MovieInfo from '../pages/movieInfo'

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/infos/:mediaType/:mediaTypeId' element={<MovieInfo />} />
      </Routes>
    </Router>
  )
}

export default RoutesComponent

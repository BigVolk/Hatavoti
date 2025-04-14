import FrontPage from './Pages/FrontPage/FrontPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FrontPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

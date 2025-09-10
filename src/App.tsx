import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import './styles.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
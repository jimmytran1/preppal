import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import Import from './pages/Import'
import Processing from './pages/Processing'
import RecipeEditor from './pages/RecipeEditor'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/import" element={<Import />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/editor" element={<RecipeEditor />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App

import Resume from './pages/Resume'
import Home from './pages/Home'
import Projects from './pages/Projects'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Layout>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        

      </Routes>
      </Layout>
      
    </BrowserRouter>
  )
}

export default App

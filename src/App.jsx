import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {

  return (
    
      <Layout>

          <Routes>

            <Route path='/' element={<AboutMe />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>

      </Layout>

  )

}

export default App;

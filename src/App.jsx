import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Main-items/Footer'

import { useEffect } from 'react'

import './App.css'
import './styled-components/elements/svg.css';
import './styled-components/elements/img.css';
import './styled-components/elements/input.css';

import { Suspense, lazy } from 'react'
import Contact from './components/Home-Items/Contact';
import NewNavbar from './components/Main-items/NewNavbar'

// Rutas Principales
const Home = lazy(() => import('./pages/HomePage'))
const About = lazy(() => import('./pages/AboutPage'))
const AppSection = lazy(() => import('./pages/AppPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Sub Rutas
const Before = lazy(() => import('./components/AppSection-items/BeforeView'))
const After = lazy(() => import('./components/AppSection-items/AfterView'))

function App() {
  // Actualizar la web desde App/After
  useEffect(() => {
    // Verificar la ruta actual y redirigir si es necesario
    const currentPath = window.location.pathname;
    if (currentPath === '/app/after') {
      window.location.href = '/app/before';
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          {/* Esto es para hacer el scroll con el Footer */}
          <div id="top"></div>
          {/* <Navbar /> */}
          <NewNavbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />

            <Route path="/app/*" Component={AppSection}>
              <Route path="after" Component={After} />
              <Route path="before" Component={Before} />
            </Route>

            <Route path="*" Component={NotFoundPage} />
          </Routes>
          <Contact />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

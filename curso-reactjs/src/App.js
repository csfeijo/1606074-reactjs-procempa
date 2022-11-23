import React from 'react'
import './assets/scss/main.scss'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './Theme'
import Menu from './components/Menu'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Home from './pages/Home'
import Departamentos from './pages/Departamentos'
import FormDepartamento from './pages/FormDepartamento'
import DetalheDepartamento from './pages/DetalheDepartamento'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <Menu />  
        <section>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>} />
            
              <Route path='/departamentos'>
                <Route index element={<Departamentos/>} />
                <Route path='new' element={<FormDepartamento/>} />
                <Route path=':idDepartamento' element={<DetalheDepartamento/>} />
              </Route>

            </Route>
            {/* Idealmente fica fora do escopo do / - no final das regras */}
            <Route path='*' element={<h1>Not Found</h1>}/>
          </Routes>
        </section>    
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

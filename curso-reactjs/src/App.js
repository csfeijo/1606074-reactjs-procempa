import React from 'react';
import './assets/scss/main.scss';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './Theme';
import Menu from './components/Menu';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Departamentos from './pages/Departamentos';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
      <Menu />  
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          
          <Route path='/departamentos'>
            <Route index element={<Departamentos/>} />
            <Route path='new' element={<h1>Add Departamento</h1>} />
            <Route path=':idDepartamento' element={<h1>Detalha Departamento</h1>} />
          </Route>

        </Route>
        {/* Idealmente fica fora do escopo do / - no final das regras */}
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>      
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;

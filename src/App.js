
import './App.css';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyHeader from './components/MyHeader';

import MyFooter from './components/MyFooter';
import TvShow from './components/TvShow';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyHome from './components/MyHome';

function App() {
  return (
    <div className='bg-dark'>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route element={<MyHome/>}  path='/'  ></Route>
          <Route element={<TvShow/>} path='/tvshow'>
          </Route>
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </div>
  );
}

export default App;

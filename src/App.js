
import './App.css';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyHeader from './components/MyHeader';
import MyGallery from './components/MyGallery';
import MyGallery2 from './components/myGallery2';
import MyGallery3 from './components/MyGallery3';
import MyFooter from './components/MyFooter';
import TvShow from './components/TvShow';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='bg-dark'>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/MyHeader' element={<TvShow />}  ></Route>
          <Route element={<TvShow />} path='/tvshow'>
          </Route>
        </Routes>
        <MyHeader classname="bg-white" />
        <MyGallery />
        <MyGallery2 />
        <MyGallery3 />
      </BrowserRouter>
      <MyFooter />
    </div>
  );
}

export default App;

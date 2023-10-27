
import './App.css';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyHeader from './components/MyHeader';
import MyGallery from './components/MyGallery';
import MyGallery2 from './components/myGallery2';
import MyGallery3 from './components/MyGallery3';

function App() {
  return (
    <div className='bg-dark'>
      <MyNavbar />
      <MyHeader classname="bg-white" />
      <MyGallery/>
      <MyGallery2/>
      <MyGallery3/>
    </div>
  );
}

export default App;

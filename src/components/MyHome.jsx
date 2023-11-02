import MyGallery from './MyGallery';
import MyGallery2 from './myGallery2';
import MyGallery3 from './MyGallery3';
import MyHeader from './MyHeader';
const MyHome=()=>{
    return(
        <div className="text-white">
        <MyHeader classname="bg-white" /> 
        <MyGallery/>
        <MyGallery2/>
        <MyGallery3/>
        </div>
        )
    }
    
    export default MyHome
import Stars from "./Components/Stars";
import Rating from "./Components/Rating";
import SortRating from "./Components/SortRating";
import Search from "./Components/Search";
import Song from "./Components/Song";
import { Button } from "antd";


import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App" align="center">
      
        <Stars value={5} text={'Great'}/>
        <Stars value={3} text={'Meh'}/>
        <Stars value={2} text={'Nada'}/>
        <Stars value={1} text={'Zii'}/>
        <Stars value={5} text={'Great'}/>
        <Stars value={2} text={'Meow'}/>
        <Stars value={3} text={'Hey'}/>
    <br/>
    
    <Search/>
        <br></br>
        
            <Button type="primary">create </Button>
       <Button danger type="primary">delete</Button>
       <Button loading type="default">Update</Button>
        
     
       <br></br>
       <br></br>
        <Song/>
        <Rating/>
        <SortRating/>

   
        
    </div>
  );
}

export default App;

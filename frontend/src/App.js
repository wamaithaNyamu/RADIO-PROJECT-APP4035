import Stars from "./Components/Stars";
import Rating from "./Components/Rating";
import SortRating from "./Components/SortRating";
import { Form, Input, Select, Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
        <Stars value={5} text={'Great'}/>
        <Stars value={3} text={'Meh'}/>
        <Stars value={2} text={'Nada'}/>
        <Stars value={1} text={'Zii'}/>
        <Stars value={5} text={'Great'}/>
        <Stars value={2} text={'Meow'}/>
        <Stars value={3} text={'Hey'}/>
    <br/>
        <Rating/>
        <SortRating/>

    </div>
  );
}

export default App;

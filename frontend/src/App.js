import Stars from "./Components/Stars";

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

        <div>
            <button>5 STAR RATING SONGS</button>
        </div>
    </div>
  );
}

export default App;

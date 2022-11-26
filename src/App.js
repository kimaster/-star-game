import logo from './logo.svg';
import './App.css';

function StarMatch(){

   return(<div className='game'>
      <div className='help"'>
        Please pick 1 or more numbers that sum the number of stars
      </div>
      <div className='game-board'>
        <div className='stars-container'>
          stars
        </div>
        <div className='nums-container'>
           numbers
        </div>
      </div>
    </div>)
}
function App() {
  return (
     <StarMatch/>
  );
}

export default App;

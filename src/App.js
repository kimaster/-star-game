import logo from './logo.svg';
import './App.css';

function StarMatch(){

   return(<div className='game'>
      <div className='help"'>
        Please pick 1 or more numbers that sum the number of stars
      </div>
      <div className='game-board'>
        <div className='stars-container'>
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
        <div className='nums-container'>
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>)
}

const colors={
available:'gray',
used:'lightgreen',
wrong:'lightred',
ccandidate:'brown'

}
function App() {
  return (
     <StarMatch/>
  );
}

export default App;

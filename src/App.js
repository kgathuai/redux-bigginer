import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state =>state.counter)
  const isLogged = useSelector(state =>state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <h1>Counter {counter}</h1>
    {isLogged ? <h3>Valuable information you cant see</h3> : ''}
    
    <button onClick ={()=>dispatch(increment(4))}>+</button>
    <button onClick={()=>dispatch(decrement(2))}>-</button>
     

    </div>
  );
}

export default App;

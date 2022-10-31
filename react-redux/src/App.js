import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {actions} from './store/index'
function App() {
  const counter = useSelector((state)=>state.counter)
 const dispatch= useDispatch(); 

  const increament =()=>{

    dispatch(actions.increment())
  }

    const decrement=()=>{
    dispatch(actions.decrement())
  }

  const addBy = ()=>{
    dispatch(actions.addBy(10))
  }

  return (
    <div>
     <h1>Counter App</h1>
     <h1>{counter }</h1>
     <button onClick={increament}>Increament</button>
     <button onClick={decrement}>Decrement</button>
     <button onClick={addBy}>Add Value by 10</button>
    </div>
  );
}

export default App;

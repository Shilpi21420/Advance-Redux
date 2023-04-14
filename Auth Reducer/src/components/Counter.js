import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store/index';



const Counter = () => {

const dispatch = useDispatch();
const counter = useSelector(state => state.counter.counter);
const show = useSelector(state =>state.showCounter);

const incrementHandler = ()=>{
  dispatch(counterAction.increment());

};
const decrementHandler = () =>{
  dispatch(counterAction.decrement());

};
const increseHandler = () =>{
  dispatch(counterAction.increase(5));
};

const decreaseHandler = () =>{
  dispatch(counterAction.decrease(5));
};

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increment By 5</button>
        <button onClick={decreaseHandler}>Decrement By 5</button>
        <button onClick={decrementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

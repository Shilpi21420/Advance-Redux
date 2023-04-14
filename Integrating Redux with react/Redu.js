import Redux from 'react-redux';


const counterReducer = (state ={counter:0},action) =>{

    if (action.type==='increment'){
    return {
        counter : state.counter +1
    };
}
if(action.type==='decrement'){
    return {
        counter : state.counter -1
    };

}
};

const store = Redux.createStore(counterReducer);


const CounterSubscriber = ()=>{
    const latesState=store.getState();
    console.log(latesState);

};
store.subscribe(CounterSubscriber);

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
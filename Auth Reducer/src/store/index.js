import { createSlice, configureStore } from '@reduxjs/toolkit';



const initialCountreState = {counter: 0, showCounter : true};

 const counterSlice = createSlice({
    name :'counter',
    initialState : initialCountreState,
    reducers :{
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter=state.counter + action.payload;
        },
        decrease(state, action) {
            state.counter=state.counter - action.payload;
        },
        toggleCounter(state) {
            state.showCounter=!state.showCounter;
        }
    }
 });

 const inAuthState ={ isAuthenticated:false };

 const authSlice = createSlice({
    name : 'isAuthentication',
    initialState: inAuthState,
    reducers: { 
        login(state){
            state.isAuthenticated = true;

        },
        logout(state){
            state.isAuthenticated = false;

        }
    }
 });


const store = configureStore({
    reducer : {counter: counterSlice.reducer, auth :authSlice.reducer},
});

export const counterAction = counterSlice.actions;
export const AuthActions = authSlice.actions;
export default store; 
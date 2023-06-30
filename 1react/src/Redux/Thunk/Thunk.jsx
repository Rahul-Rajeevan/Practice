import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

// Action creators
const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();

      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, isLoading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, isLoading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

// Dispatch the asynchronous action
store.dispatch(fetchData());

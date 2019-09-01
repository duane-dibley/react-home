import { FETCH_DATA, RECEIVE_DATA } from '../actions/actionTypes';

export default function data(state = { rows: [] }, action) {

  switch (action.type) {

    case FETCH_DATA:
      console.log('FETCH_DATA Action')
      return state;

    case RECEIVE_DATA:
      console.log('RECEIVE_DATA Action')
      return state;

    default:
      return state;
  }
}

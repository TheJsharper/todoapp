import {FilterActions, FilterType, SET_FILTER} from './filter.actions';

const initialState: FilterType = 'all';

export function filterReducer(state: FilterType = initialState, action: FilterActions): FilterType {

  switch (action.type) {
    case SET_FILTER:
      return action.filter;
      break;
    default: {
      return state;
    }
  }
}

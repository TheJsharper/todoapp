import {Action} from '@ngrx/store';

export const SET_FILTER: string = '[FILTER] Set Filter';

export type FilterType = 'completed' | 'pending' | 'all';

export class SetFilterAction implements Action {
  readonly type: string = SET_FILTER;


  constructor(public filter: FilterType) {

  }

}

export type FilterActions = SetFilterAction;

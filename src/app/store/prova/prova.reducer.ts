import {createReducer, on} from '@ngrx/store';
import {initialProvaState, ProvaState} from './prova.state';
import {provaActions} from './prova.actions';
import {SampleAnswer} from "./prova.models";

export const provaReducer = createReducer(
    initialProvaState,
    on(provaActions.get.success, (state, actionData: {payload: SampleAnswer}) => {
        return {...state, name: actionData.payload.uCaseName ?? null};
    }),
);

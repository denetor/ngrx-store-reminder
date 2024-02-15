import {createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState} from "../app.state";
import {ProvaState} from "./prova.state";

// queste righe sono uguali
// export const selectProva = (state: AppState) => state.prova;
export const selectProva = createFeatureSelector<ProvaState>('prova');

export const selectName = createSelector(
    selectProva,
    (state: ProvaState) => state.name
);

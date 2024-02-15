import {createFeatureSelector } from '@ngrx/store';
import {ViewPortState} from "./viewport.state";

// queste righe sono uguali
export const selectViewPort = createFeatureSelector<ViewPortState>('viewPort');


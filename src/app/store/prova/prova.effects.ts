import {Actions, createEffect, ofType} from '@ngrx/effects';
import {provaActions} from './prova.actions';
import {Store} from '@ngrx/store';
import {catchError, concat, concatMap, filter, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {ProvaService} from "./prova.service";
import {SampleAnswer, SampleData} from "./prova.models";
import {AppState} from "../app.state";

@Injectable()
export class ProvaEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly provaService: ProvaService,
        private readonly store: Store<AppState>,
    ) {}


    // questo funziona, ma non è bellissimo
    getRequest$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(provaActions.get.request),
                map(async (action: {payload: SampleData}) => {
                    if (action.payload.name) {
                        const uCaseName = await this.provaService.get(action.payload.name);
                        if (uCaseName) {
                            this.store.dispatch(provaActions.get.success({payload: {uCaseName}}));
                        }
                    }
                }),
                catchError(() => of(provaActions.get.failure())),
            );
    }, { dispatch: false });

    getSuccess$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(provaActions.get.success),
                map(async (action: {payload: SampleAnswer}) => {
                    if (action.payload.uCaseName) {
                        console.log(`actions.get.success responded with: ${action.payload.uCaseName}`);
                    }
                }),
                catchError(() => of(provaActions.get.failure())),
            );
    }, { dispatch: false });

}

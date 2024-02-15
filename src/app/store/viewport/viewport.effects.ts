import {Actions, createEffect, ofType} from '@ngrx/effects';
import {viewPortActions} from "./viewport.actions";
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {AppState} from "../app.state";
import {SetViewPortDto, SetViewPortResponse} from "./viewport.models";
import {ViewPortService} from "./viewport.service";

@Injectable()
export class ViewPortEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
    ) {}


    // questo funziona, ma non è bellissimo
    setRequest$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(viewPortActions.set.request),
                map((action: {payload: SetViewPortDto}) => {
                    this.store.dispatch(viewPortActions.set.success({payload: ViewPortService.getDescriptor(action.payload.width)}));
                }),
            );
    }, { dispatch: false });

}

import {createReducer, on} from '@ngrx/store';
import {initialViewPortState} from "./viewport.state";
import {viewPortActions} from "./viewport.actions";
import {SetViewPortResponse} from "./viewport.models";

export const viewPortReducer = createReducer(
    initialViewPortState,
    on(viewPortActions.set.success, (state, actionData: {payload: SetViewPortResponse}) => {
        return {
            ...state,
            width: actionData.payload.width ?? null,
            isSmall: actionData.payload.isSmall ?? null,
            isMedium: actionData.payload.isMedium ?? null,
            isLarge: actionData.payload.isLarge ?? null,
        }
    }),
);

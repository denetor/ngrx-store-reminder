import {createAction, props} from '@ngrx/store';
import {SetViewPortDto, SetViewPortResponse} from "./viewport.models";

export const viewPortActions = {
    set: {
        request: createAction('viewport.set.request', props<{payload: SetViewPortDto}>()),
        success: createAction('viewport.set.success', props<{payload: SetViewPortResponse}>())
    }
}

import {createAction, props} from '@ngrx/store';
import {SampleAnswer, SampleData} from './prova.models';

export const provaActions = {
    get: {
        request: createAction('prova.get.request', props<{payload: SampleData}>()),
        success: createAction('prova.get.success', props<{payload: SampleAnswer}>()),
        failure: createAction('prova.get.failed'),
    }
}

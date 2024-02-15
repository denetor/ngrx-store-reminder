import {AppState} from "./app.state";
import { provaReducer } from "./prova/prova.reducer";
import {viewPortReducer} from "./viewport/viewport.reducer";

export const appReducers: ActionReducerMap<AppState> = {
    prova: provaReducer,
    viewPort: viewPortReducer,
}

import {ProvaState} from "./prova/prova.state";
import {ViewPortState} from "./viewport/viewport.state";

export interface AppState {
    prova: ProvaState;
    viewPort: ViewPortState;
}

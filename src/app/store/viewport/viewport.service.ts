import {SetViewPortResponse} from "./viewport.models";

export class ViewPortService {
    static getDescriptor(width: number|undefined): SetViewPortResponse {
        if (!width) {
            return {
                width: null,
                isSmall: null,
                isMedium: null,
                isLarge: null,
            }
        } else {
            return {
                width: width,
                isSmall: (width < 960),
                isMedium: (width >= 960 && width < 1280),
                isLarge: (width >= 1280),
            }
        }
    }
}

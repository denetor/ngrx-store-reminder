export interface ViewPortState {
    isSmall: boolean | null;
    isMedium: boolean | null;
    isLarge: boolean | null;
}

export const initialViewPortState: ViewPortState = {
    isSmall: null,
    isMedium: null,
    isLarge: null,
}
